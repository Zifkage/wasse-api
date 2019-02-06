import create from './create';
import retrieve from './retrive';
import deleteEngine from './delete';
import list from './list';

const postsHandlers = {
  create,
  retrieve,
  list,
  delete: deleteEngine,
};

export default postsHandlers;
