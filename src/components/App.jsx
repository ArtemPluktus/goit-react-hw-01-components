import { Profile } from './Profile/Profile.jsx';
import profileData from './Profile/Profile.json';
import { StatsList } from './Stats/StatsList.jsx';
import statsData from './Stats/Stats.json';
import { FriendsList } from './Friends/FriendsList.jsx';
import friendsData from './Friends/Friends.json';
import { TransactionHistoryList } from './Transactions/TransactionHistoryList.jsx';
import transactionData from './Transactions/Transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={profileData.username}
        tag={profileData.tag}
        location={profileData.location}
        avatar={profileData.avatar}
        stats={profileData.stats}
      />

      <StatsList statsData={statsData} />

      <FriendsList friendsData={friendsData} />

      <TransactionHistoryList transactionData={transactionData} />
    </div>
  );
};
