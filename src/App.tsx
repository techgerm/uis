import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import AppMenu from './components/AppMenu/AppMenu';
import "./App.css";
import { render } from 'react-dom';
import { Menu } from 'antd';

function App() {

  return (
    <Router>
      <div>
        <AppMenu />
        <Switch>
          <Route exact component={Home} path="/" />
          <Route exact component={Contact} path="/contact" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
