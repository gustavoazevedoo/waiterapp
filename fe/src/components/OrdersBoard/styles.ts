import styled from "styled-components";

export const Board = styled.div`
  padding: 1rem;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 16px;

  header {
    padding: 0.5rem;
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
`;

export const OrdersContainer = styled.div`
  margin-top: 24px;

  button {
    background: #FFFFFF;
    border: 1px solid rgba(204, 204, 204, 0.4);
    height: 128px;
    border-radius: 8px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 4px;

    & + button {
      margin-top: 24px;
    }

    strong {
      font-weight: 500;
      color: #333333;
    }

    span {
      font-size: 0.875rem;
      color: #666666;
    }
  }
`;
