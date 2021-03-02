import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Feed from '../Feed/Feed';
import UserPhotoPost from './UserPhotoPost';
import UserStatiscs from './UserStatiscs';
import UserHeader from './UserHeader';

const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route exact path="/" element={<Feed />} />
        <Route path="/post" element={<UserPhotoPost />} />
        <Route path="/statistics" element={<UserStatiscs />} />
      </Routes>
    </section>
  );
};

export default User;
