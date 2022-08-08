import PropTypes from 'prop-types';
// import { Box } from "components/Box";

import {FriendsName, FriendsItem,
    FriendsAvatar, FriendsStatus
} from 'components/FriendList/FriendList.styled'

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendsItem>
      <FriendsStatus isOnline={isOnline}></FriendsStatus>
      <FriendsAvatar src={avatar} alt={name} />
      <FriendsName>{name}</FriendsName>
    </FriendsItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};