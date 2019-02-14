import create from './create';
import retrieve from './retrieve';
import deleteEngine from './delete';
import list from './list';
import vote from './vote';
import solve from './solve';

const postsEngines = {
  create,
  retrieve,
  delete: deleteEngine,
  list,
  vote,
  solve,
};

export default postsEngines;
