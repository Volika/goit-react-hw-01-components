import PropTypes from 'prop-types';

import {
  ProfContainer,
  DescriptionContainer,
  ProfAvatar, ProfName, ProfTag, ProfLocation,
  ProfStats, ProfStatsLabel, ProfStatsQuantity
} from 'components/Profile/Profile.styled'


export const Profile = ({username, tag, location, avatar, stats }) => {

    return (
    <ProfContainer>
  <DescriptionContainer>
    <ProfAvatar
      src={avatar}
      alt={username}
    />
    <ProfName>{username}</ProfName>
    <ProfTag>@{tag}</ProfTag>
    <ProfLocation>{location}</ProfLocation>
  </DescriptionContainer>

  <ProfStats>
    <li>
      <ProfStatsLabel>Followers</ProfStatsLabel>
      <ProfStatsQuantity>{stats.followers}</ProfStatsQuantity>
    </li>
    <li>
      <ProfStatsLabel>Views</ProfStatsLabel>
      <ProfStatsQuantity>{stats.views}</ProfStatsQuantity>
    </li>
    <li>
      <ProfStatsLabel>Likes</ProfStatsLabel>
      <ProfStatsQuantity>{stats.likes}</ProfStatsQuantity>
    </li>
  </ProfStats>
</ProfContainer>
    );
};

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.node,
    stats: PropTypes.objectOf(PropTypes.number).isRequired,
}