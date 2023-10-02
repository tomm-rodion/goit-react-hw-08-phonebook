import styled from '@emotion/styled';
import { btn, font } from 'components/Style/mixins';

export const NavWrapperAuthed = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
export const NavUrerName = styled.p`
  font-size: '15px';
  & :last-child {
    color: #3c6ec4;
    ${font({ fs: 20, fw: 500, lh: 30 })}
    border-bottom: 1px solid #3c6ec4;
  }
`;
export const Button = styled.button`
  padding: 6px 6px;
  ${font({ fs: 20, fw: 500, lh: 30 })}
  ${btn}
  padding: 3px 14px;
  text-align: center;
  margin-right: 20px;
`;
