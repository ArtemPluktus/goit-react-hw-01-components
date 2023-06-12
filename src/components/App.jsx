import { Profile } from './Profile/Profile.jsx';
import profileData from './Profile/Profile.json';

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
    </div>
  );
};
