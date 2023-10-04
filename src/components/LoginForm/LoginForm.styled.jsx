import styled from '@emotion/styled';
import { Button, TextField } from '@mui/material';
import { ContainerForm, btn } from 'components/Style/mixins';

export const LoginForm = styled.form`
  ${ContainerForm()}
`;

export const LoginField = styled(TextField)`
  border-bottom: 3px solid #10567b;
  border-radius: 5px;
`;
export const LoginButton = styled(Button)`
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
