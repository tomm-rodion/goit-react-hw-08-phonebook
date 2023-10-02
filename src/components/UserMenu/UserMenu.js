import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

import { Button, NavUrerName, NavWrapperAuthed } from './UserMenu.styled';

export function UserMenu() {
  const { user } = useAuth();
  const dispatch = useDispatch();

  return (
    <NavWrapperAuthed>
      <NavUrerName>
        Welcome, <span>{user.name}</span>
      </NavUrerName>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </NavWrapperAuthed>
  );
}
