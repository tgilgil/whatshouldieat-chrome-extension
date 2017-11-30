import { injectGlobal } from 'styled-components';

// import bg from './images/bg.jpg';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    background-color: black;
    /* animation: fadein 3s; */
  }

  html {
    position: relative;
    min-height: 100%;
  }

  /* @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  } */

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

  #bg {
    position:fixed;
    padding:0;
    margin:0;
    top:0;
    left:0;
    min-height: 100%;
    min-width: 100%;
  }

  @keyframes fadein {
    from { 
      opacity: 0;
      filter: blur(50px); 
    }
    50% {
      opacity: 1;
    }
    75% {
      filter: blur(40px);
    }
    to   { 
      opacity: 1;
      filter : blur(0px);
      /* transform: scale(1.05); */
    }
  }

  @keyframes text-slide {
    from {
      margin-right: 300%;
      margin-left: 0%;
    }
    90% {
      margin-left: 0%;
    }
    to {
      margin-right: 0%;
    }
  }

  p,
  label {
    font-family: 'Ubuntu Condensed', Helvetica, Arial, sans-serif;
    line-height: 1.5em;
  }
`;
