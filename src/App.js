import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Header from './header/Header';
import Storefront from './storefront/Storefront';
import Dashboard from './dashboard/Dashboard';
import Products from './products/Products';
import Users from './users/Users';


class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Header />
            <div className="content">
              <Switch>
                <Route exact path="/" component={Dashboard}/>
                <Route path="/storefront" component={Storefront} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/users" component={Users} />
                <Route path="/products" component={Products} />
              </Switch>
            </div>
          </div>
        </Router>
    );
  }
}

export default App;
