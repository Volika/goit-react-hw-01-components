import styled from '@emotion/styled';
import { theme } from 'components/theme';

export const ProfContainer = styled.div`
    background-color: ${theme.colors.muted};
    margin: ${theme.space[4]}px auto;
    width: 360px;
    border-radius: ${theme.radii.lg};
    overflow: hidden;
    padding-top: ${theme.space[4]}px;
`
export const DescriptionContainer = styled.div`
    text-align: center;
    font-weight: ${theme.fontWeights.normal};
    color: ${theme.colors.dark_grey};
`

export const ProfAvatar = styled.img`
    border-radius: 50%;
    width: 250px;
    background-color: ${theme.colors.background};
    `

export const ProfName = styled.p`
    color: ${theme.colors.black};
    text-transform: uppercase;
    font-weight: ${theme.fontWeights.bold};
`

export const ProfTag = styled.p`
     margin-bottom: ${theme.space[4]}px;
     color: ${theme.colors.dark_grey};
`

export const ProfLocation = styled.p`
     color: ${theme.colors.dark_grey};
`

export const ProfStats = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
    text-align: center;
    widht: 100%;
    padding-top: 8px;
    padding-inline-start: 0px;
    
`
export const ProfStatsLabel = styled.span`
    margin-bottom: ${theme.space[3]}px;
    color: ${theme.colors.black};
    
`

export const ProfStatsQuantity = styled.span`
    width: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${theme.space[4]}px;
    font-size: ${theme.fontSizes.m};
    font-weight: ${theme.fontWeights.bold};
`