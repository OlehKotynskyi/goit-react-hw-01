import user from '../api/user.json';
import data from '../api/data.json';
import friends from '../api/friends.json';
import transactions from '../api/transactions.json';
import { Profile } from './profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
   return (
      <div>
         <Profile user={user} />
         <Statistics title="Upload stats" stats={data} />
         <Statistics stats={data} />
         <FriendList friends={friends} />
         <TransactionHistory items={transactions} />
      </div>
   );
};
