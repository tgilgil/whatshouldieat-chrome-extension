/**
 *
 * Asynchronously loads the component for MainTitle
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
