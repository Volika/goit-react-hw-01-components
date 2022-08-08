import PropTypes from 'prop-types';
// import { Box } from "components/Box";
import {FriendListItem} from 'components/FriendList/FriendListItem'

import {FriendsListTitle,
    FriendsListContainer,
    FriendsList
} from 'components/FriendList/FriendList.styled'

export const FriendList = ({ friends }) => {
    return (
        <FriendsListContainer>
            <FriendsListTitle> </FriendsListTitle>
            
            <FriendsList>

        {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}


      </FriendsList>

        </FriendsListContainer>

    )
}


FriendList.propTypes = {
   friends: PropTypes.arrayOf(
       PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline:PropTypes.bool.isRequired,
    })
  ).isRequired,   
}