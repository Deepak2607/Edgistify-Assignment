import React, {useEffect} from 'react';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
import PrivateRoute from './components/routing/PrivateRoute';
import Posts from './components/posts/Posts';
import Post from './components/post/Post';
import './App.css';


import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import { loadUser } from './actions/auth';
import store from './store';

const App= ()=> {

    useEffect(() => {
        store.dispatch(loadUser());
      }, []);
    
  return (
      
    <Provider store={store}>
    <BrowserRouter>
      <Navbar/>
      <Route exact path="/" component={Landing} />
      
      <div className="container">
      <Alert/>
      <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <PrivateRoute exact path="/posts" component={Posts} />
      <Route exact path="/posts/:id" component={Post} />
      </Switch>
      </div>
    
    </BrowserRouter>
    </Provider>
  );
}

export default App;



