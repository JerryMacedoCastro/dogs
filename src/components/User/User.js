import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Feed from '../Feed/Feed';
import UserPhotoPost from './UserPhotoPost';
import UserStatiscs from './UserStatiscs';
import UserHeader from './UserHeader';
import { UserContext } from '../../UserContext';
import NotFound from '../NotFound';

const User = () => {
  const { data } = useContext(UserContext);
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="/post" element={<UserPhotoPost />} />
        <Route path="/statistics" element={<UserStatiscs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default User;
