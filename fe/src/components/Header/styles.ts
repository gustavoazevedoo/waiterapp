import styled from "styled-components";

export const Container = styled.header`
  background-color: #D73035;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 198px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .page-details {
    color: #fff;

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1rem;
      font-weight: 400;
      opacity: 0.9;
      margin-top: 0.375rem;
    }
  }
`;
