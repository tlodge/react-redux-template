import React, { Component } from 'react';
import { Provider } from 'react-redux';
import MainApp from './MainApp';
import Main from './Main';
import DevTools from './DevTools';
import { Router, Route, browserHistory } from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

export default class Root extends Component {
  
  render(){
    const { store } = this.props;
    const history = syncHistoryWithStore(browserHistory, store);
    return (
      <Provider store={store}>
        <div>
          <Router history={history}>
            <Route path="/" component={Main}>
              <Route path="counter" component={MainApp}/>
            </Route>
          </Router>
          <DevTools />
        </div>
      </Provider>
    );
  }
}
