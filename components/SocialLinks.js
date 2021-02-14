import styled from 'styled-components';

import { SiGithub } from 'react-icons/si';
import { IoMdGlobe } from 'react-icons/io';

export const SocialLinkWrapper = styled.a`
  padding: 0 10px;
  height: 36px;
  color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin: 0 16px;
  transition: all 0.15s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;

  &:hover {
    background-color: #ffffff10;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
`;

export function GithubSocialLink({ size }) {
  return (
    <SocialLinkWrapper href="/gh" target="_blank" rel="noreferrer noopener">
      <SiGithub size={size ? size : '1.25em'} />
      &nbsp;Github
    </SocialLinkWrapper>
  );
}

export function WebsiteSocialLink({ size }) {
  return (
    <SocialLinkWrapper href="https://sivaramp.com">
      <IoMdGlobe size={size ? size : '1.25em'} />
      &nbsp; Website
    </SocialLinkWrapper>
  );
}
