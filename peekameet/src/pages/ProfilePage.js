import React from 'react';
import { Details } from '../components/Layout/UserProfile/Details';
import { Notes } from '../components/Layout/UserProfile/Notes';
import { UserHeader } from '../components/Layout/UserProfile/UserHeader';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  return (<>
    <UserHeader/>
    <Details/>
    {/* <Notes/> */}
  </>
  );
};

export default ProfilePage;
