import ReactGA from 'react-ga';

export class GoogleAnalytics {
  initialize() {
    ReactGA.initialize('UA-106881554-1', { debug: false });
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  track(path) {
    ReactGA.pageview(path);
  }
}
