import styled from "@emotion/styled";
import { theme } from 'components/theme';

export const StatisticsTitle = styled.h2`
  text-transform: uppercase;
    margin-bottom: ${theme.space[2]}px;
  `
export const StatisticsContainer = styled.div`
    background-color: ${theme.colors.muted};
    margin: ${theme.space[4]}px auto;

    border-radius: ${theme.radii.lg};
    overflow: hidden;
    padding-top: ${theme.space[4]}px;
`
export const StatisticsList = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
    text-align: center;
    widht: 100%;
    padding-top: 8px;
    padding-inline-start: 0px;
    
`
export const StatisticsItem = styled.li`

`

export const StatisticsLabel = styled.span`
    margin-bottom: ${theme.space[3]}px;
    color: ${theme.colors.black};
    font-size: ${theme.fontSizes.xm};
    font-weight: ${theme.fontWeights.bold};
`
export const StatisticsPercent = styled.span`
    width: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${theme.space[4]}px;
    font-size: ${theme.fontSizes.xm};
    font-weight: ${theme.fontWeights.bold};
    
`