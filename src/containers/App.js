import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from "../components/layout/layout";
import Dashboard from './dashboard';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Dashboard}/>
      </Switch>
    </Layout>
  );
}

export default App;
