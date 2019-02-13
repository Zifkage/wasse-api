import User from './user.model';
import Post from './post.model';
import Response from './response.model';
import Vote from './vote.model';

const models = {
  User: User.model,
  Post,
  Response: Response.model,
  Vote: Vote.model,
  currentUser: {},
};

export default models;
