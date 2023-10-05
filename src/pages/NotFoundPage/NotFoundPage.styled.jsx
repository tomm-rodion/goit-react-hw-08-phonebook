import styled from '@emotion/styled';
import { font } from 'components/Style/mixins';

export const WraperNotFoundPage = styled.div`
  display: grid;
  place-items: center;
  padding: 40px;
  border-radius: 8px;
  background-color: #ededf2;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
`;
export const TextNotFoundPage = styled.p`
  color: #414141;
  ${font({ fs: 30, fw: 500, lh: 30 })}
`;
