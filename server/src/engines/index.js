import postsEngine from './posts';
import usersEngine from './users';
import authEngine from './auth';

const engines = {
  users: usersEngine,
  posts: postsEngine,
  auth: authEngine,
};

export default engines;
