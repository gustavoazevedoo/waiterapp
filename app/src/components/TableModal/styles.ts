import styled from "styled-components/native";

export const Overlay = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.6);
  justify-content: center;
  align-items: stretch;
  padding: 0 24px;
`;

export const ModalBody = styled.View`
  padding: 24px;
  background: #fafafa;
  border-radius: 8px;
`;


export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Form = styled.View`
  margin-top: 32px;

  `;

export const Input = styled.TextInput`
  background: #fff;
  padding: 16px;
  border: 1px solid rgba(204, 204, 204, 0.5);
  border-radius: 8px;
  margin-bottom: 24px;
`;