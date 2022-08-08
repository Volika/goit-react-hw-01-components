import styled from "@emotion/styled";
import { theme } from 'components/theme';

export const Table = styled.table`
  width: 600px;
  font-size: ${theme.fontSizes.m};
  background-color: ${theme.colors.muted};
`;

export const Head = styled.thead`
  background-color: ${theme.colors.accent};

`;

export const Tr = styled.tr`
   height: 40px;
  text-align: center;
  :nth-of-type(2n) {
    background-color: ${theme.colors.white};
  }
`;

export const Th = styled.th`
   color: ${theme.colors.white};
    text-transform: uppercase;
    font-weight: ${theme.fontWeights.bold};
`;
export const Body = styled.tbody`
 background-color: ${theme.colors.muted};
 `;

export const Td = styled.td`
    font-size: ${theme.fontSizes.npmm};
    font-weight: ${theme.fontWeights.bold};
    `;