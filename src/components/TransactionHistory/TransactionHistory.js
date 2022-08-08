import PropTypes from 'prop-types';
// import { Box } from "components/Box";
import {Table, Head, Body,
    Tr, Th, Td
} from 'components/TransactionHistory/TransactionHistory.styled'

export const TransactionHistory = ({ transactions }) => {
  return (
    <Table>
      <Head>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </Head>

      <Body>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <Tr key={id}>
              <Td>{type}</Td>
              <Td>{amount}</Td>
              <Td>{currency}</Td>
            </Tr>
          );
        })}
      </Body>
    </Table>
  );
};

TransactionHistory.propTypes = {
  transaction: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};