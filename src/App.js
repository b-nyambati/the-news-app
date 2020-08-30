import React from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import Publication from './Pages/Publication/Publication';
import Article from './Pages/Article/Article';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {

  return (
    <Router>
      <div>
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
