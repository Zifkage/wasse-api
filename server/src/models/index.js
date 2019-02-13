import User from './user.model';
import Post from './post.model';
import Response from './response.model';

const models = {
  User: User.model,
  Post,
  Response: Response.model,
  currentUser: {},
};

export default models;
