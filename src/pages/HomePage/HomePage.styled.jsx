import styled from '@emotion/styled';
import { btn, font, titleColor } from 'components/Style/mixins';
import { NavLink } from 'react-router-dom';

export const HomeTitle = styled.p`
  color: #414141;
  ${font({ fs: 30, fw: 500, lh: 30 })}
`;
export const HomeNameApp = styled.span`
  ${titleColor()}
  ${font({ fs: 40, fw: 500, lh: 40 })}
`;
export const WraperHomePage = styled.div`
  display: grid;
  place-items: center;
  padding: 40px;
  border-radius: 8px;
  background-color: #ededf2;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
`;
export const HomeButtonLink = styled(NavLink)`
  color: #414141;
  ${font({ fs: 20, fw: 400, lh: 30 })}
  ${btn}
  padding: 5px 25px;
  margin-top: 25px;
  & :last-child {
    margin-right: 10px;
  }
`;
export const Span = styled.span`
  & :last-child {
    margin-left: 10px;
  }
`;
export const Introduction = styled.p`
  margin-top: 20px;
  margin-bottom: 5px;
`;
