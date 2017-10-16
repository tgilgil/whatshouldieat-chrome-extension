import { injectGlobal } from 'styled-components';

// import bg from './images/bg.jpg';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  html {
    position: relative;
    min-height: 100%;
  }

  body {
    font-family: 'Ubuntu Condensed', Helvetica, Arial, sans-serif;
    /* background: url() no-repeat fixed;
    background-size: cover; */
    color: white;
    overflow-y: auto;
  }
  
  html, body, .App {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    padding: 0;
    margin: 0;
  }

  body.fontLoaded {
    font-family: 'Ubuntu Condensed', Arial, Helvetica, sans-serif;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Ubuntu Condensed', Helvetica, Arial, sans-serif;
    line-height: 1.5em;
  }
`;
