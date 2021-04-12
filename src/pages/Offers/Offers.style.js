import styled from "styled-components";

export const OffersContainer = styled.div`
  display: grid;
  
  margin-top: 24px;
  @media (min-width: 1349px) {
    grid-template-columns: 15% 75%;
  }

  @media (min-width: 1400px) {
    grid-template-columns: 20% 75%;
  }
`;

export const Filters = styled.div``;
