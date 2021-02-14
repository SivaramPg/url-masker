import styled from 'styled-components';

const ContainerStyles = styled.div`
  width: 1200px;
  height: auto;
  margin: 0 auto;

  display: flex;
  flex-flow: row wrap;
  position: relative;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

function Container({ children }) {
  return <ContainerStyles>{children}</ContainerStyles>;
}

export default Container;
