import styled from 'styled-components'

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
