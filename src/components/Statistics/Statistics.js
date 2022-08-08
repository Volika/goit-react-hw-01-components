import PropTypes from 'prop-types';
import { Box } from "components/Box";
// import randomColor from 'randomcolor';
import {StatisticsListItem} from 'components/Statistics/StatisticsListItem'

import {
    StatisticsContainer,
    StatisticsTitle, StatisticsList
} from 'components/Statistics/Statistics.styled'

export const Statistics = ({ title, stats }) => {
    return (
        <StatisticsContainer>
            <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
            >
       {title && <StatisticsTitle>{title}</StatisticsTitle>}          
</Box>
      <StatisticsList>                
    {stats.map(({ label, percentage, id }) => {
        return (
          <StatisticsListItem
            key={id}
            label={label}
           percentage={percentage}
          />
        );
      })}
      </StatisticsList>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};