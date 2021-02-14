import styled from 'styled-components';
import { SiGithub } from 'react-icons/si';

import Container from '../components/Container';

const NavbarWrapper = styled.nav`
  width: 100%;
  height: 72px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;

  background: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  padding: 0 50px;
  z-index: 100;

  & > div {
    justify-content: space-between;
  }

  a > img {
    width: 150px;
    transition: all 0.15s cubic-bezier(0.25, 0.8, 0.25, 1);
    margin-top: 10px;
  }

  ul {
    display: flex;
    align-items: center;
    list-style-type: none;

    & > a > li {
      display: inline-block;
      margin: 0 30px 0 30px;
      cursor: pointer;

      display: flex;
      align-items: center;
      padding: 8px 0;

      border: 2px solid transparent;
      transition: border-bottom 0.125s ease-in-out;

      &:hover {
        border-bottom: 2px solid black;
        text-shadow: 0 0 2px #aaa;
      }
    }
  }
`;

export default function Navbar() {
  return (
    <NavbarWrapper>
      <Container>
        <div>
          <a href="https://sivaramp.com">
            <img src="/logo.svg" alt="logo" />
          </a>
        </div>
        <ul>
          <a href="/view-source" target="_blank" rel="noopener noreferrer">
            <li>
              View Source&nbsp;&nbsp;
              <SiGithub size="1.5em" />
            </li>
          </a>
        </ul>
      </Container>
    </NavbarWrapper>
  );
}
