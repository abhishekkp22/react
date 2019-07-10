import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './../components/App';
import About from './../components/About';
import Contact from './../components/Contact';
import Posts from './../components/Posts';
import FileNotFound from './../components/FileNotFound';
import Header from '../components/Header';
import Tasks from './../components/Tasks';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' exact component={App} />
        <Route path='/about/:id' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/posts' component={Posts} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/tasks' component={Tasks} />
        <Route component={FileNotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
