import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Header from './components/header/Header';
import Storefront from './components/storefront/Storefront';
import Dashboard from './components/dashboard/Dashboard';
import Products from './components/products/Products';
import Users from './components/users/Users';


class App extends Component {
  
  render() {
    const baseUrl = process.env.PUBLIC_URL;
    return (
        <Router>
          <div className="App">
            <Header />
            <div className="content">
              <Switch>
                <Route path={baseUrl + "/storefront"} component={Storefront} />
                <Route exact path={baseUrl + "/"} component={Dashboard} />
                <Route path={baseUrl + "/users"} component={Users} />
                <Route path={baseUrl + "/products"} component={Products} />
              </Switch>
            </div>
          </div>
        </Router>
    );
  }
}

export default App;
