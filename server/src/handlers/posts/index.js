import create from './create';
import retrieve from './retrive';
import deleteEngine from './delete';

const postsHandlers = {
  create,
  retrieve,
  delete: deleteEngine,
};

export default postsHandlers;
