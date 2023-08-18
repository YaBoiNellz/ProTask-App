import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/login/login';
import Dashboard from './components/dashboard/dashboard';
import Calendar from './components/Calendar/Calendar';
import TodoList from './components/todolist/todoList';
import Settings from './components/settings/settings'

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/todolist" component={TodoList} />
          <Route path="/settings" component={Settings} />
        </Switch>
    </Router>
  );
}

export default App;
