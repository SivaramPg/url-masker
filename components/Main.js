import styled from 'styled-components';

const MainWrapper = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;

  background: linear-gradient(
    350deg,
    rgba(37, 93, 247, 0.2),
    rgba(129, 194, 246, 0.5)
  );
`;

function Main() {
  return <MainWrapper></MainWrapper>;
}

export default Main;
