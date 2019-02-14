import '@babel/polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import checkEmptyPayload from './middlewares/check-empty-payload';
import checkContentTypeIsJson from './middlewares/check-content-type-is-json';
import checkContentTypeIsSet from './middlewares/check-content-type-is-set';
import checkUserAuth from './middlewares/check-user-auth';
import engines from './engines';
import injectHandlerDependencies from './utils/inject-handler-dependencies';
import handlers from './handlers';
import generateErrorMessage from './system-messages/errors';
import mongoose from 'mongoose';
import db from './models';

const handlerToEngineMap = new Map([
  [handlers.users.create, engines.users.create],
  [handlers.users.retrieve, engines.users.retrieve],
  [handlers.posts.create, engines.posts.create],
  [handlers.posts.retrieve, engines.posts.retrieve],
  [handlers.posts.delete, engines.posts.delete],
  [handlers.posts.list, engines.posts.list],
  [handlers.auth.login, engines.auth.login],
  [handlers.responses.create, engines.responses.create],
  [handlers.responses.vote, engines.responses.vote],
]);

const app = express();

app.use(cors());

// Connection to mlab
mongoose.Promise = global.Promise;
mongoose.connect(`${process.env.MONGODB_HOST}`, { useNewUrlParser: true });
mongoose.connection.on('error', () => {
  throw new Error('Unable to connect to database!');
});

app.use(bodyParser.json({ limit: 1e6 }));

app.use(checkEmptyPayload);
app.use(checkContentTypeIsSet);
app.use(checkContentTypeIsJson);

// USERS
app.post(
  '/users',
  injectHandlerDependencies(
    handlers.users.create,
    db,
    handlerToEngineMap,
    generateErrorMessage,
  ),
);

app.get(
  '/users/:userId',
  injectHandlerDependencies(handlers.users.retrieve, db, handlerToEngineMap),
);

// POSTS
app.post(
  '/posts',
  checkUserAuth(db),
  injectHandlerDependencies(
    handlers.posts.create,
    db,
    handlerToEngineMap,
    generateErrorMessage,
  ),
);

app.get(
  '/posts/:postId',
  injectHandlerDependencies(handlers.posts.retrieve, db, handlerToEngineMap),
);

app.get(
  '/posts',
  injectHandlerDependencies(handlers.posts.list, db, handlerToEngineMap),
);

app.delete(
  '/posts',
  injectHandlerDependencies(handlers.posts.delete, db, handlerToEngineMap),
);

// RESPONSE
app.post(
  '/responses/:postId',
  checkUserAuth(db),
  injectHandlerDependencies(
    handlers.responses.create,
    db,
    handlerToEngineMap,
    generateErrorMessage,
  ),
);

app.post(
  '/responses/:postId/:responseId/vote',
  checkUserAuth(db),
  injectHandlerDependencies(
    handlers.responses.vote,
    db,
    handlerToEngineMap,
    generateErrorMessage,
  ),
);

// AUTH
app.post(
  '/login',
  injectHandlerDependencies(handlers.auth.login, db, handlerToEngineMap),
);

app.post('/logout', function(req, res) {
  const token = req.get('cookie');
  delete db.currentUser[token.split(';')[0]];
  res.status(200);
  res.json({ message: 'OK' });
});

app.use(handlers.errorHandler);

app.listen(process.env.SERVER_PORT, () => {
  console.log(
    `Social-Aca API server listening on port ${process.env.SERVER_PORT}!`,
  );
});
