import React from 'react';
import { Details } from '../components/Layout/UserProfile/Details';
import { UserHeader } from '../components/Layout/UserProfile/UserHeader';

const ProfilePage = () => {
  return (<>
    <UserHeader/>
    <Details/>
  </>
  );
};

export default ProfilePage;
