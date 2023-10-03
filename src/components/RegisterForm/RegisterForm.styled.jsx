import styled from '@emotion/styled';
import { Button, TextField } from '@mui/material';
import { ContainerForm, btn } from 'components/Style/mixins';

export const WraperAuthForm = styled.div`
  display: grid;
  place-items: center;
  padding: 40px;
  border-radius: 8px;
  background-color: #ededf2;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
`;

export const AuthForm = styled.form`
  ${ContainerForm()}
`;
export const AuthField = styled(TextField)`
  border-bottom: 3px solid #10567b;
  border-radius: 5px;
`;
export const AuthButton = styled(Button)`
  ${btn}
  background-color:#f2f5f7;
  color: #10567b;
  border: 1px solid #10567b;
  padding: 10px 0;
  font-size: 20px;
  &:hover {
    background-color: #dadddc;
    color: #10567b;
    scale: 1.1;
  }
`;
