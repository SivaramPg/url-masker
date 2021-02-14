import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { IoCopyOutline } from 'react-icons/io5';

const CopyTextWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 60px;

  .icon {
    cursor: pointer;
    color: #273036;
    transition: drop-shadow 0.125s ease-in-out;

    &:hover {
      filter: drop-shadow(0 5px 3px #7d7d7d99);
    }
  }
`;

export default function CopyText({ text, onCopy, title = '' }) {
  return (
    <CopyTextWrapper>
      <CopyToClipboard text={text} onCopy={onCopy}>
        <IoCopyOutline size="2em" className="icon" title={title} />
      </CopyToClipboard>
    </CopyTextWrapper>
  );
}
