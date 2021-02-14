import styled from 'styled-components';
import { CgSpinner } from 'react-icons/cg';

const GenerateButtonWrapper = styled.div`
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

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
    }
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

    &:hover {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    }

    .spin {
      animation-name: spin;
      animation-duration: 1000ms;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`;

export default function GenerateButton({
  onClick,
  disabled = false,
  showSpinner = false,
}) {
  return (
    <GenerateButtonWrapper>
      <button onClick={onClick} disabled={disabled}>
        {showSpinner ? (
          <>
            <CgSpinner size="2em" className="spin" />
            &nbsp;&nbsp;Generating...
          </>
        ) : (
          'Generate Masked URL'
        )}
      </button>
    </GenerateButtonWrapper>
  );
}
