import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from "components/layout/layout";
import Dashboard from 'containers/dashboard';
import Tasks from "containers/tasks";
import Projects from "containers/projects";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Dashboard}/>
        <Route path="/tasks" exact component={Tasks}/>
        <Route path="/projects" exact component={Projects}/>
      </Switch>
    </Layout>
  );
}

export default App;
