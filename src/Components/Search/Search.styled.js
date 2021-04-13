import styled from "styled-components";

export const Inputx = styled.div`
  position: relative;

  &:focus-within label {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  & label {
    position: absolute;
    top: 8px;
    left: 12px;

    &[for="destinationLocationCode"] {
      right: 12px;
      left: initial;
    }
  }

  & input {
    padding: 16px 12px;
    max-width: 200px;
    min-height: 43px;
    border: 0;
    border-radius: 9px;
    font-size: 16px;
    background: var(--base);
    color: var(--text-dark);
    &::placeholder {
      line-height: 3;
      font-size: 12px;
      color: var(--darkest);
    }
    &:focus {
      border-color: #888;
      &::placeholder {
        line-height: initial;
        font-size: initial;
      }
    }
    &[name="destinationLocationCode"] {
      text-align: right;
    }
  }

  ${(props) =>
    props.srOnly === true &&
    `
    & label {
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0,0,0,0);
      border: 0;
    }
  `}
`;

export const StyledDataList = styled.datalist`
  position: absolute;
  width: 506px;
  max-height: 300px;
  margin-top: 54px;
  font-size: 0.8rem;
  border-radius: 5px;
  background-color: var(--lightest);
  overflow: hidden scroll;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
  ${(props) =>
    props.display === true &&
    `
    display: block;
  `}
  span {
    display: block;
    padding: 12px 16px;
    font-size: 12px;
    font-weight: 600;
    color: var(--text-dark);
    z-index: 9;
    cursor: pointer;
    &:hover {
      background-color: var(--base);
    }
  }

  option {
    font-weight: 400;
    color: var(--text-dark);
    z-index: 10;
    cursor: pointer;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
`;

export const DateTimex = styled.div`
  position: relative;

  &:focus-within label {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  & label {
    position: absolute;
    top: 8px;
    left: 12px;

    &[for="returnDate"] {
      right: 12px;
      left: initial;
    }
  }

  & input {
    padding: 16px 12px;
    max-width: 200px;
    min-height: 43px;
    border: 0;
    border-radius: 9px;
    font-size: 16px;
    background: var(--base);
    &::placeholder {
      line-height: 3;
      font-size: 12px;
      color: var(--darkest);
    }
    &:focus {
      border-color: #888;
      &::placeholder {
        line-height: initial;
        font-size: initial;
      }
    }
  }

  ${(props) =>
    props.srOnly === true &&
    `
    & label {
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0,0,0,0);
      border: 0;
    }
  `}
`;

export const StyledCounter = styled.div`

  position: relative;
  padding: 16px 12px;
  min-width: 192px;
  min-height: 43px;
  border: 0;
  font-size: 16px;
  background-color: var(--base);
  border-radius: 9px;

  & input[type="number"] {
    width: 32px;
    border: 0;
    text-align: center;
    font-size: 16px;
    background-color: transparent;
    appearance: textfield;
  }

  & button {
    width: 24px;
    height: 24px;
    margin: 0 12px;
    border: 1px solid var(--text-dark);
    border-radius: 50%;
    color: var(--text-dark);
    background-color: var(--lightest);
    cursor: pointer;
  }
  `