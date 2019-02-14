import postsEngine from './posts';
import usersEngine from './users';
import authEngine from './auth';
import responsesEngine from './responses';
import workshopsEngine from './workshops';

const engines = {
  users: usersEngine,
  posts: postsEngine,
  auth: authEngine,
  responses: responsesEngine,
  workshops: workshopsEngine,
};

export default engines;
