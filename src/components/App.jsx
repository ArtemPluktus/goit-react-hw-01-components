import { Profile } from './Profile/Profile.jsx';
import profileData from './Profile/profileData.json';
import { StatsList } from './Stats/StatsList.jsx';
import statsData from './Stats/statsData.json';
import { FriendsList } from './Friends/FriendsList.jsx';
import friendsData from './Friends/friendsData.json';
import { TransactionHistoryList } from './Transactions/TransactionHistoryList.jsx';
import transactionData from './Transactions/transactionData.json';

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

      <StatsList title={'Upload stats'} statsData={statsData} />

      <FriendsList friendsData={friendsData} />

      <TransactionHistoryList transactionData={transactionData} />
    </div>
  );
};
