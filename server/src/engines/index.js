import postsEngine from './posts';
import usersEngine from './users';
import authEngine from './auth';
import responsesEngine from './responses';

const engines = {
  users: usersEngine,
  posts: postsEngine,
  auth: authEngine,
  responses: responsesEngine,
};

export default engines;
