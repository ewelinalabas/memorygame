import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, withRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import './styles/index.css';
import store from './store';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { App } from './App';
import { Scoreboard } from './components/Scoreboard/Scoreboard';

const rootElement = document.getElementById('root');
const NavigationWithRouter = withRouter(Navigation);
const routing = (
  <Router>
      <Provider store={store}>
        <NavigationWithRouter />
        <Route exact path = '/' component = {App} />
        <Route path = '/scoreboard' component = {Scoreboard} />
      </Provider>
      <Footer />
  </Router>
);

ReactDOM.render(routing, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
