import React from 'react';  
import Router from 'react-router';  
import {DefaultRoute, Link, Route, RouteHandler} from 'react-router';
import { Provider } from 'react-redux';
import jQuery from 'jquery';


class App extends React.Component {  

  render() {
    window.admin = false;
    return (
      <div className="nav" id="app">
		Hello World
      </div>
    );
  }
};


React.render(
  <App />,
  document.body
);
