import styled from "@emotion/styled";
import { theme } from 'components/theme';

export const FriendsListTitle = styled.h2`
    text-transform: uppercase;
    margin-bottom: ${theme.space[2]}px;
  `;
 
export const FriendsListContainer = styled.div`
 
    margin: ${theme.space[4]}px auto;

    border-radius: ${theme.radii.lg};
    overflow: hidden;
    padding-top: ${theme.space[4]}px;
`;
export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
    
`;
export const FriendsItem = styled.li`
    display: flex;
    align-items: center;
    background-color: ${theme.colors.muted};
    padding: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 320px;
    text-transform: uppercase;
    font-weight: ${theme.fontWeights.bold};
`;
export const FriendsAvatar = styled.img`
    border-radius: 50%;
    width: 48px;
`;
export const FriendsStatus = styled.span`
  border-radius: 50%;
  height: 20px;
  margin-right: 20px;
  width: 20px;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;
export const FriendsName = styled.p`
  margin-left: 20px;
  width: 20px;
  
`;
