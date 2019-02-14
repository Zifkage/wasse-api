import posts from './posts';
import users from './users';
import errorHandler from '../middlewares/error-handler';
import auth from './auth';
import responses from './responses';
import workshops from './workshops';

const handlers = {
  posts,
  users,
  errorHandler,
  auth,
  responses,
  workshops,
};

export default handlers;
