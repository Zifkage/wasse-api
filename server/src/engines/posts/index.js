import create from './create';
import retrieve from './retrieve';
import deleteEngine from './delete';

const postsEngines = {
  create,
  retrieve,
  delete: deleteEngine,
};

export default postsEngines;
