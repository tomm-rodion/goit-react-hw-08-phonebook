import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  padding: 10px;
  font-size: 28px;
  font-weight: 600;
  transition: text-shadow 300ms cubic-bezier(0.165, 0.84, 0.44, 1);
  position: relative;

  &.active {
    color: #414141;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 1px;
    height: 3px;
    width: 100%;
    left: 0;
    background-color: #414141;
    transition: transform 300ms cubic-bezier(0.165, 0.84, 0.44, 1);
    transform: scaleX(0);
  }
  &:hover::after,
  &:focus::after {
    transform: scaleX(1);
  }
`;
