import React from 'react';
import '../App.css';
import HeaderRu from './HeaderRu'
import MainRu from './MainRu'
import SideBarRu from './SideBarRu'



const AppRu = () => {
  return (
      <div className="appWrapper">
        <SideBarRu />
        <HeaderRu />
        <MainRu />
      </div>
    
  );
}

export default AppRu;
