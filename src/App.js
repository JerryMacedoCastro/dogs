import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ProtectedRouter from './components/Helper/ProtectedRouter';
import Home from './components/Home';
import Login from './components/Login/Login';
import User from './components/User/User';
import Photo from './components/Photo/Photo';

import { UserStorage } from './UserContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <ProtectedRouter path="account/*" element={<User />} />
            <Route path="photo/:id" element={<Photo />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </>
  );
}

export default App;
