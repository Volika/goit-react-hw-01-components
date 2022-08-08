import PropTypes from 'prop-types';
import { Box } from "components/Box";
import randomColor from 'randomcolor';

import {
    StatisticsLabel, StatisticsPercent
} from 'components/Statistics/Statistics.styled'

export const StatisticsListItem = ({ label, percentage, id }) => {
    return (
        <Box
            key={id}
            display="flex"
            flexDirection="column"
            alignItems="center"
            bg={randomColor()}
            p={3}
        >
            <StatisticsLabel>{label}</StatisticsLabel>
            <StatisticsPercent>{percentage}%</StatisticsPercent>
        </Box>
    );
};

StatisticsListItem.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};