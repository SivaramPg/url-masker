import styled from 'styled-components';

import OpenLink from './OpenLink';
import CopyText from './CopyText';

const DisplayUrlWrapper = styled.div`
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

    a {
      text-decoration: underline;
    }
  }
`;

export default function DisplayUrl({ link, onCopy }) {
  return (
    <DisplayUrlWrapper>
      <p>
        Masked URL:&nbsp;
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            {link}
          </a>
        ) : (
          '<null>'
        )}
      </p>
      <CopyText text={link} onCopy={onCopy} title="Copy to Clipboard" />
      <OpenLink link={link} />
    </DisplayUrlWrapper>
  );
}
