import NowPlaying from '../views/page/now-playing';
import Upcoming from '../views/page/upcoming';
import Detail from '../views/page/detail';

const routes = {
  '/': NowPlaying,
  '/now-playing': NowPlaying,
  '/upcoming': Upcoming,
  '/detail/:id': Detail,
};

export default routes;
