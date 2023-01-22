import React from 'react';
import Home from '../Home/Home';
import LeftNav from '../shared/LeftNav/LeftNav';
import Navbar from '../shared/Navbar/Navbar';
import RightNav from '../shared/RightNav/RightNav';

const Dashboard = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex justify-between">
        <LeftNav></LeftNav>
        <Home></Home>
        <RightNav></RightNav>
      </div>
    </div>
  );
};

export default Dashboard;
