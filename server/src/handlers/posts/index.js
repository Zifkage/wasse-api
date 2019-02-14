import create from './create';
import retrieve from './retrive';
import deleteHandlers from './delete';
import list from './list';
import vote from './vote';

const postsHandlers = {
  create,
  retrieve,
  list,
  delete: deleteHandlers,
  vote,
};

export default postsHandlers;
