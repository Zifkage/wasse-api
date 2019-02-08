import posts from './posts';
import users from './users';
import errorHandler from '../middlewares/error-handler';
import auth from './auth';

const handlers = {
  posts,
  users,
  errorHandler,
  auth,
};

export default handlers;
