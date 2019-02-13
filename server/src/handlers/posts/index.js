import create from './create';
import retrieve from './retrive';
import deleteHandlers from './delete';
import list from './list';

const postsHandlers = {
  create,
  retrieve,
  list,
  delete: deleteHandlers,
};

export default postsHandlers;
