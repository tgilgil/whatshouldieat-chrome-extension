/**
 *
 * Asynchronously loads the component for SocialMediaButtons
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
