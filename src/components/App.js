// import styled from '@emotion/styled';

import { Box } from "components/Box";
import { Fragment } from "react";

import user from 'components/data/user.json';
import { Profile } from "components/Profile/Profile";
// import { theme } from 'components/theme';
// import { GlobalStyle } from 'components/GlobalStyle';

import stats from 'components/data/data.json';
import { Statistics } from "components/Statistics/Statistics";

import friends from 'components/data/friends.json';
import { FriendList } from "components/FriendList/FriendList";

import transactions from 'components/data/transactions.json';
import { TransactionHistory } from "components/TransactionHistory/TransactionHistory";

export const App = () => {
  return (
    <Fragment>

      <Box
        display="flex"
        alignItems="flex-start"
        justifyContent="center"
        p="10px"
>
               <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
    </Box>
      <Box
        display="flex"
        alignItems="flex-start"
        justifyContent="center"
        p="10px"
      >
         <Statistics title="Upload stats" stats={stats} />
    </Box>
      <Box
        display="flex"
        alignItems="flex-start"
        justifyContent="center"
        p="10px"
      >
         <FriendList friends={friends} />
      </Box>
      
            <Box
        display="flex"
        alignItems="flex-start"
        justifyContent="center"
        p="10px"
      >
          {/* TransactionHistory */}
         <TransactionHistory transactions={transactions} />
    </Box>

    </Fragment>
  
    );
};
