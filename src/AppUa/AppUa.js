import React from 'react';
import '../App.css';
import HeaderUa from './HeaderUa'
import MainUa from './MainUa'
import SideBarUa from './SideBarUa'



const AppUa = () => {
  return (
      <div className="appWrapper">
        <SideBarUa />
        <HeaderUa />
        <MainUa />
      </div>
    
  );
}

export default AppUa;
