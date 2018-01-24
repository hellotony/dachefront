import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import ListPage from './antd/ListPage';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/index" exact component={IndexPage} />
        <Route path="/list" exact component={ListPage} />
      </Switch>
    </Router>
  );
}


export default RouterConfig;
