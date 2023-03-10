import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);

  display: grid;
  place-items: center;
`;

export const ModalBody = styled.div`
  background: #FFFFFF;
  border-radius: 8px;
  max-width: 480px;
  width: 100%;

  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 1.5rem;
    }

    button {
      display: flex;
      border: none;
      background-color: transparent;
    }
  }

  .status-container {
    small {
      font-size: 0.875rem;
      opacity: 0.8;
      font-weight: 500;
    }

    div {
      margin-top: 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`;

export const OrderDetails = styled.div`
  small {
    font-size: 0.875rem;
    font-weight: 500;
    opacity: 0.8;
  }

  .order-items {
    margin-top: 1rem;
  }

  .item {
    display: flex;

    & + .item {
      margin-top: 1rem;
    }
    img {
      width: 72px;
      border-radius: 6px;
      object-fit: cover;
    }

    .quantity {
      font-size: 0.875rem;
      color: #666666;
      min-width: 20px;
      display: block;
      margin-left: 12px;
    }

    .product-details {
      span {
        font-size: 0.875rem;
        margin-top: 0.25rem;
        display: block;
        color: #666666;
      }
    }
  }

  .total {
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    small {
      font-size: 0.875rem;
      opacity: 0.8;
      font-weight: 500;
    }
  }
`;

export const Actions = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .primary {
    background: #333333;
    border-radius: 48px;
    color: #fff;
    padding: 0.75rem 1.5rem;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

  }

  .secondary {
    color: #D73035;
    font-weight: 600;
    background-color: transparent;
    border: none;
    padding: 0.75rem 1.5rem;
  }
`;
