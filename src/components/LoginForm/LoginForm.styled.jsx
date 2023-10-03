import styled from '@emotion/styled';
import { Button, TextField } from '@mui/material';
import { ContainerForm } from 'components/Style/mixins';

export const LoginForm = styled.form`
  ${ContainerForm()}
`;

export const LoginField = styled(TextField)`
  border-bottom: 3px solid #10567b;
  border-radius: 5px;
`;
export const LoginButton = styled(Button)`
  color: #2dcf2d;
  border: 1px solid #2dcf2d;
  padding: 10px 0;
  font-size: 20px;
`;
