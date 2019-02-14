import create from './create';
import retrieve from './retrive';
import deleteHandlers from './delete';
import list from './list';
import vote from './vote';
import solve from './solve';

const postsHandlers = {
  create,
  retrieve,
  list,
  delete: deleteHandlers,
  vote,
  solve,
};

export default postsHandlers;
