import styled from 'styled-components';
import { IoOpenOutline } from 'react-icons/io5';

const OpenLinkWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 10px;
  width: auto;
  height: auto;

  .icon {
    cursor: pointer;
    color: #273036;
    transition: drop-shadow 0.125s ease-in-out;

    &:hover {
      filter: drop-shadow(0 5px 3px #7d7d7d99);
    }
  }
`;

export default function OpenLink({ link = null }) {
  return (
    <OpenLinkWrapper>
      <IoOpenOutline
        size="2em"
        className="icon"
        title="Open Masked URL"
        onClick={() => (link ? window.open(link, '_newtab') : null)}
      />
    </OpenLinkWrapper>
  );
}
