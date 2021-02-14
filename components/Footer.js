import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';
import Container from '../components/Container';
import { GithubSocialLink, WebsiteSocialLink } from './SocialLinks';

const FooterWrapper = styled.footer`
  width: 100%;
  height: 150px;

  background-color: #273036;

  display: flex;
  align-items: center;
  position: relative;
  overflow: visible;

  div > div:nth-of-type(1) {
    width: 40%;
    display: flex;
    align-items: center;
    flex-flow: column nowrap;

    p {
      color: white;
    }

    p:nth-of-type(2) {
      font-size: 12px;
    }
  }

  div > div:nth-of-type(2) {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <div>
          <p>
            Made with &nbsp;
            <FaHeart style={{ color: 'red' }} />
            &nbsp; by Sivaram Pandariganthan
          </p>
          <br />
          <br />
          <p>
            &#169; 2021-present Sivaram Pandariganthan. All Rights Reserved.
          </p>
        </div>
        <div>
          <WebsiteSocialLink size="1.75em" />
          <GithubSocialLink size="1.5em" />
        </div>
      </Container>
    </FooterWrapper>
  );
}
