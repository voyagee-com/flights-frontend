import styled from "styled-components";

export const Ticket = styled.article`
  display: grid;
  grid-template-columns: 65% 20%;
  margin-bottom: 24px;
`;

export const ItineraryGroup = styled.div`
  position: relative;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0px 0px 8px rgba(80, 80, 80, 0.1);
  &::before,
  &::after {
    content: "";
    top: 12px;
    right: -1px;
    position: absolute;
    width: 12px;
    height: calc(100% - 24px);
    border: 0px dashed #ececec;
    background: #fff;
  }
  &::after {
    margin-right: -12px;
    border-left-width: 2px;
  }

  & section {
    &:first-child {
      border-bottom: 1px solid var(--base);
      padding-bottom: 12px;
    }
    &:last-child {
      border-top: 1px solid var(--base);
      padding-top: 12px;
    }
  }
`;

export const Price = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0px 0px 8px rgba(80, 80, 80, 0.1);

  & span {
    font-size: 24px;
    font-weight: 800;
    &::before {
      content: "$ ";
      font-size: 16px;
    }
    &::after {
      content: "with Taxes";
      display: block;
      text-align: center;
      font-weight: 500;
      font-size: 12px;
    }
  }

  /* & button {
    width: max-content;
    padding: 8px 24px;
    line-height: 1.5em;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    border: 0;
    border-radius: 24px;
    color: var(--lightest);
    background: var(--primary);
    cursor: pointer;
  } */
`;
