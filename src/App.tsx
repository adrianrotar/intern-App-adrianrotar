import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from 'pages/home';
import Users from 'pages/users';

import Layout from './pages/layout';
import './App.scss';

const App = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route element={<Home />} path="/" />
      <Route element={<Users />} path="/users" />
    </Route>
  </Routes>
);

export default App;
