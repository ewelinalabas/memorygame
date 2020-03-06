import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import store from './store';
import { App } from './App';
import { Scoreboard } from './components/Scoreboard/Scoreboard';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';

const rootElement = document.getElementById('root')
const routing = (
  <Router>
    <div className="container">
      <Provider store={store}>
        <Route exact path = '/' component = {App} />
        <Route path = '/scoreboard' component = {Scoreboard} />
      </Provider>
    </div>
  </Router>
)

ReactDOM.render(routing, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
