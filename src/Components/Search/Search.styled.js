import styled from "styled-components";

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

export const StyledForm = styled.form`
  /* display: flex;
  justify-content: space-between; */
  display: grid;
  grid-template-columns: 10% 10% 10% 10% 20% 10%;
  grid-gap: 5%;

  & .counter {
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
  }
  `