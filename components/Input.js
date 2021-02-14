import styled from 'styled-components';

import { MdClear } from 'react-icons/md';

const InputWrapper = styled.div`
  width: 60%;
  position: relative;

  & > label {
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

  & > input {
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
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
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
`;

export default function Input({ value, onChange, onClear, placeholder }) {
  return (
    <InputWrapper>
      <input
        id="input"
        type="text"
        required
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        autoComplete="off"
      />
      <label htmlFor="input">Enter an URL String</label>
      {value && <MdClear size="1.5em" className="clear" onClick={onClear} />}
    </InputWrapper>
  );
}
