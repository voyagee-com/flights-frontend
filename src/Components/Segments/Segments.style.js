import styled from "styled-components";

export const StyledSegments = styled.div`
  display: flex;
  justify-content: space-between;

  &div:last-child {
    text-align: right;
  }
`;

export const Carrier = styled.div`
  width: 35%;
  & h3 {
    margin-bottom: 8px;
    font-size: 18px;
    color: var(--text-dark);
  }

  p {
    color: var(--text-base);
  }

  svg {
    margin-right: 8px;
    vertical-align: middle;
  }
`;

export const AirportTime = styled.div`
  width: 20%;
  text-align: center;

  span {
    display: block;
    font-size: 28px;
    font-weight: 900;
    & + time {
      font-size: 14px;
      font-weight: 400;
      color: var(--brand04);
    }
  }
`;

export const Duration = styled.div`
  width: 25%;
  text-align: center;

  time {
    display: block;
    font-size: 12px;
  }

  span {
    position: relative;
    display: block;
    font-size: 12px;
    font-weight: 700;

    &::before {
      content: "";
      display: inline-block;
      width: 100%;
      margin: 0px 16px 4px 0;
      border-top: 1px solid var(--text-base);
    }
    &::after {
      content: "•";
      top: -35%;
      left: 0;
      position: absolute;
      width: 100%;
      text-align: center;
      font-size: 24px;
      color: var(--brand04);
    }
  }
`;
