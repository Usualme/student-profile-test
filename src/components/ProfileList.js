import { ProfileCard } from './ProfileCard';

export const ProfileList = ({ data }) => {

    return (
      <>
        {Array.isArray(data) && data.map((profile) => <ProfileCard profile={profile} /> )}
      </>
    )
};

