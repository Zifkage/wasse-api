import posts from './posts';
import users from './users';
import errorHandler from '../middlewares/error-handler';

const handlers = {
  posts,
  users,
  errorHandler,
};

export default handlers;
