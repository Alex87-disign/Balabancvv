import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppUa from './AppUa/AppUa'
import AppUk from './AppUk'
import AppRu from './AppRu/AppRu';

const App = () => {
  return (

    <Switch>
      <Route path="/ru" component={AppRu} />
      <Route path="/ua" component={AppUa} />
      <Route path="/" component={AppUk} />
      
    </Switch>
  );
}

export default App;
