import { useState } from 'react';
import styled from 'styled-components';
import validUrl from 'valid-url';

const MainWrapper = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;

  background: linear-gradient(
    350deg,
    rgba(37, 93, 247, 0.2),
    rgba(129, 194, 246, 0.5)
  );

  & > div:first-of-type {
    width: 1200px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;

    margin-bottom: 50px;
  }

  .input-wrapper {
    width: 60%;
    max-width: 600px;
    position: relative;

    label {
      position: absolute;
      left: 10px;
      transform: translateY(75%);
      transition: all 0.125s linear;
      background-color: #fff;
      padding: 0 5px;
      font-size: 20px;
      color: #7d7d7d;
      cursor: text;
    }

    input {
      width: 100%;
      height: 60px;
      border-radius: 5px;

      border: 2px solid white;
      padding: 5px 10px;

      font-size: 20px;

      &:focus {
        border: 2px solid black;
      }

      &:valid ~ label,
      &:focus ~ label {
        color: #7d7d7d;
        font-size: 16px;
        transform: translateY(-50%);
      }
    }
  }

  button {
    width: 150px;
    height: 60px;
    margin-left: 20px;
    border-radius: 5px;

    border: none;
    cursor: pointer;
  }

  .masked-url-container {
    width: 46%;

    height: 60px;
    background-color: pink;
  }
`;

function Main() {
  const [input, setInput] = useState('');
  const [maskedUrl, setMaskedUrl] = useState(null);

  const createMapping = async () => {
    if (validUrl.isWebUri(input)) {
      const response = await fetch('/api/map', {
        method: 'POST',
        body: JSON.stringify({ url: input }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      setMaskedUrl(`${window.location.href}m/${result.identifier}`);
    } else {
      alert('invalid');
    }
  };

  return (
    <MainWrapper>
      <div>
        <div className="input-wrapper">
          <input
            id="url-input"
            type="text"
            required
            onChange={(event) => setInput(event.target.value)}
          />
          <label for="url-input">Enter an URL String</label>
        </div>
        <button onClick={createMapping} disabled={!input}>
          Generate Masked URL
        </button>
      </div>
      {maskedUrl && (
        <div className="masked-url-container">
          <p>{maskedUrl}</p>
        </div>
      )}
    </MainWrapper>
  );
}

export default Main;
