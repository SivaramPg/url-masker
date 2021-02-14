import styled from 'styled-components';

const TitleWrapper = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 48px;
  text-decoration: underline;

  img {
    width: 50px;
    margin: 0 20px;
  }
`;

export default function Title({ children }) {
  return <TitleWrapper>{children}</TitleWrapper>;
}
