import { useState } from 'react';
import styled from 'styled-components';
import validUrl from 'valid-url';

import { MdClear } from 'react-icons/md';
import { IoCopyOutline, IoOpenOutline } from 'react-icons/io5';

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

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 50px;
      margin: 0 20px;
    }
  }

  & > div:first-of-type {
    width: 1200px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;

    margin-top: 20vh;
    margin-bottom: 50px;
    position: relative;
  }

  .input-wrapper {
    width: 60%;
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
      padding: 5px 40px 5px 10px;

      font-size: 20px;
      caret-color: black;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

      &:hover,
      &:focus,
      &:valid {
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
          0 6px 6px rgba(0, 0, 0, 0.23);
      }

      &:focus {
        border: 2px solid black;
      }

      &:valid ~ label,
      &:focus ~ label {
        color: #7d7d7d;
        font-size: 16px;
        transform: translateY(-50%);
      }

      ::placeholder {
        color: #aaa;
      }
    }

    .clear {
      position: absolute;
      top: 20px;
      right: 15px;
      cursor: pointer;
    }
  }

  button {
    width: 200px;
    height: 60px;
    margin-left: 20px;
    border-radius: 5px;

    font-size: 16px;
    font-weight: bold;
    color: black;
    background-color: #a0db8e;
    border: none;

    cursor: ${(props) => (props.isUrlValid ? 'pointer' : 'not-allowed')};
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

    &:hover {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    }
  }

  .masked-url-container {
    width: 40%;
    position: relative;
    margin-top: 50px;

    min-height: 60px;

    background-color: whitesmoke;
    border-radius: 5px;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    padding: 20px 120px 20px 20px;

    font-size: 18px;

    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    overflow: hidden;

    p {
      width: 100%;
      overflow: hidden;
      word-wrap: break-word;
      background-color: #273036;
      padding: 20px;
      border-radius: 5px;
      color: #fff;

      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      font-family: 'IBM Plex Mono';
      /* text-decoration: underline; */
    }

    .icon {
      position: absolute;
      top: 20px;
      right: 0;
      cursor: pointer;
      color: #273036;
      transition: drop-shadow 0.125s ease-in-out;

      &:hover {
        filter: drop-shadow(0 5px 3px #7d7d7d99);
      }

      &:first-of-type {
        right: 60px;
      }

      &:last-of-type {
        right: 10px;
      }
    }
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
    <MainWrapper isUrlValid={Boolean(input)}>
      <h1>
        <img src="/anonymous-face-mask.svg" alt="" />
        Mask your URLs
        <img src="/anonymous-face-mask.svg" alt="" />
      </h1>
      <div>
        <div className="input-wrapper">
          <input
            id="url-input"
            type="text"
            required
            onChange={(event) => setInput(event.target.value)}
            value={input}
            placeholder="https://google.com"
          />
          <label htmlFor="url-input">Enter an URL String</label>
          {input && (
            <MdClear
              size="1.5em"
              className="clear"
              onClick={() => setInput('')}
            />
          )}
        </div>
        <button onClick={createMapping} disabled={!input}>
          Generate Masked URL
        </button>
      </div>

      <div className="masked-url-container">
        <p>Masked URL: {maskedUrl ? maskedUrl : '<null>'}</p>
        <IoCopyOutline size="2em" className="icon" title="Copy Masked URL" />
        <IoOpenOutline size="2em" className="icon" title="Open Masked URL" />
      </div>
    </MainWrapper>
  );
}

export default Main;
