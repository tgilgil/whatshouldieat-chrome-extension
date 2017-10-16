/**
*
* SocialMediaButtons
*
*/

import React from 'react';

import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

import styled from 'styled-components';

import './index.css';

const SocialMediaLink = styled.div`
  text-align: center;
  margin: 0 auto;
  padding: 0.5em 0;
  font-size: 2em;
`;

function SocialMediaButtons() {
  return (
    <Paper zDepth={2} style={{ width: '100%' }}>
      <SocialMediaLink>
        <a aria-label="Facebook" target="_blank" href="https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwhatshouldieat.xyz">
          <i className="fa fa-facebook-square" aria-hidden="true"></i> Facebook
        </a>
      </SocialMediaLink>
      <Divider />
      <SocialMediaLink>
        <a aria-label="Twitter" target="_blank" href="https://twitter.com/intent/tweet/?text=%23ilovefood%20%23whatshouldieat.xyz&amp;url=https%3A%2F%2Fwhatshouldieat.xyz">
          <i className="fa fa-twitter-square" aria-hidden="true"></i> Twitter
        </a>
      </SocialMediaLink>
      <Divider />
      <SocialMediaLink>
        <a aria-label="LinkedIn" target="_blank" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fwhatshouldieat.xyz&amp;title=%23ilovefood%20%23whatshouldieat.xyz&amp;summary=%23ilovefood%20%23whatshouldieat.xyz&amp;source=https%3A%2F%2Fwhatshouldieat.xyz">
          <i className="fa fa-linkedin-square" aria-hidden="true"></i> LinkedIn
        </a>
      </SocialMediaLink>
      <Divider />
      <SocialMediaLink>
        <a aria-label="Hacker News" target="_blank" href="https://news.ycombinator.com/submitlink?u=https%3A%2F%2Fwhatshouldieat.xyz&amp;t=%23ilovefood%20%23whatshouldieat.xyz">
          <i className="fa fa-hacker-news" aria-hidden="true"></i> Hacker News
        </a>
      </SocialMediaLink>
      <Divider />
    </Paper>
  );
}

SocialMediaButtons.propTypes = {
};

export default SocialMediaButtons;
