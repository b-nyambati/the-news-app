import React from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import Publication from './Pages/Publication/Publication';
import Article from './Pages/Article/Article';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TopBar from './Components/TopBar/TopBar';

function App() {

  return (
    <Router>
      <div className="app-container">
        <TopBar/>
        <Switch>
          <Route path = "/" exact component={Home}/>
          <Route path = "/publication" component={Publication}/>
          <Route path = "/article" component={Article}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
