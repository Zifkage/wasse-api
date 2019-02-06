import create from './create';
import retrieve from './retrieve';
import deleteEngine from './delete';
import list from './list';

const postsEngines = {
  create,
  retrieve,
  delete: deleteEngine,
  list,
};

export default postsEngines;
