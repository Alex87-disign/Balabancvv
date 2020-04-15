import React from 'react';
import './App.css';
import Header from './Header'
import Main from './Main'
import SideBar from './SideBar/SideBar'

const AppUk = () => {
  return (
      <div className="appWrapper">
        <SideBar />
        <Header />
        <Main />
      </div>
  );
}

export default AppUk
