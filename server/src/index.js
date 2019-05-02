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
  [handlers.posts.vote, engines.posts.vote],
  [handlers.posts.solve, engines.posts.solve],
  [handlers.workshops.create, engines.workshops.create],
  [handlers.workshops.retrieve, engines.workshops.retrieve],
  [handlers.workshops.participate, engines.workshops.participate],
  [handlers.workshops.list, engines.workshops.list],
  [handlers.users.list, engines.users.list],
  [handlers.users.follow, engines.users.follow]
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

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Wasse Web API!' });
});

// USERS
app.post(
  '/users',
  injectHandlerDependencies(
    handlers.users.create,
    db,
    handlerToEngineMap,
    generateErrorMessage
  )
);

app.get(
  '/users/:userId',
  injectHandlerDependencies(handlers.users.retrieve, db, handlerToEngineMap)
);

app.get(
  '/users',
  injectHandlerDependencies(handlers.users.list, db, handlerToEngineMap)
);

app.post(
  '/users/follow/:userId',
  checkUserAuth(db),
  injectHandlerDependencies(handlers.users.follow, db, handlerToEngineMap)
);

// POSTS
app.post(
  '/posts',
  checkUserAuth(db),
  injectHandlerDependencies(
    handlers.posts.create,
    db,
    handlerToEngineMap,
    generateErrorMessage
  )
);

app.get(
  '/posts/:postId',
  injectHandlerDependencies(handlers.posts.retrieve, db, handlerToEngineMap)
);

app.get(
  '/posts',
  injectHandlerDependencies(handlers.posts.list, db, handlerToEngineMap)
);

app.delete(
  '/posts',
  injectHandlerDependencies(handlers.posts.delete, db, handlerToEngineMap)
);

app.post(
  '/posts/:postId/vote',
  checkUserAuth(db),
  injectHandlerDependencies(
    handlers.posts.vote,
    db,
    handlerToEngineMap,
    generateErrorMessage
  )
);

app.patch(
  '/posts/:postId/:responseId/solve',
  checkUserAuth(db),
  injectHandlerDependencies(handlers.posts.solve, db, handlerToEngineMap)
);

// RESPONSE
app.post(
  '/responses/:postId',
  checkUserAuth(db),
  injectHandlerDependencies(
    handlers.responses.create,
    db,
    handlerToEngineMap,
    generateErrorMessage
  )
);

app.post(
  '/responses/:postId/:responseId/vote',
  checkUserAuth(db),
  injectHandlerDependencies(
    handlers.responses.vote,
    db,
    handlerToEngineMap,
    generateErrorMessage
  )
);

// WORKSHOP
app.post(
  '/workshops',
  checkUserAuth(db),
  injectHandlerDependencies(
    handlers.workshops.create,
    db,
    handlerToEngineMap,
    generateErrorMessage
  )
);

app.get(
  '/workshops/:workshopId',
  injectHandlerDependencies(handlers.workshops.retrieve, db, handlerToEngineMap)
);

app.patch(
  '/workshops/:workshopId/participate',
  checkUserAuth(db),
  injectHandlerDependencies(
    handlers.workshops.participate,
    db,
    handlerToEngineMap
  )
);

app.get(
  '/workshops',
  injectHandlerDependencies(handlers.workshops.list, db, handlerToEngineMap)
);

// AUTH
app.post(
  '/login',
  injectHandlerDependencies(handlers.auth.login, db, handlerToEngineMap)
);

app.post('/logout', function(req, res) {
  const token = req.get('token');
  delete db.currentUser[token];
  res.status(200);
  res.json({ message: 'OK' });
});

app.use(handlers.errorHandler);

app.listen(8080, () => {
  console.log(`Social-Aca API server listening on port 8080!`);
});
