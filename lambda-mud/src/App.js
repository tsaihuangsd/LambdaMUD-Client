import React, { Component } from 'react';
import {Route, withRouter} from 'react-router-dom';
// import axios from 'axios';
import './App.css';
import GameView from './Views/GameView.js';
import LoginView from './Views/LoginView.js';
import CreateUserView from './Views/CreateUserView';

class App extends React.Component {
  render() {
    
    if (this.isAuthenticated()){
      this.props.history.push('/');
      return (
            <Route  exact
                    path="/"
                    component={GameView}/>
      ); 
    }
    else{
      this.props.history.push('/login');
      return(
        <div className="App">
            <nav className="navigation-panel">
              <h1>Lambda MUD</h1>
              <br></br>
              <button onClick={()=>this.props.history.push('/create-user')}  
                      className="createuser-button">
                      Create User</button>
            </nav>
            <div className="display-panel">
                  {/* <h1>Log in</h1> */}
                  <Route  path='/login'
                          component={LoginView}/>
                  {/* <Route  path='/create-user'
                          component={CreateUserView}/> */}
            </div>
        </div>
      )
    }    
  }           
  isAuthenticated() {
    // Check whether the current time is past the
    // Access Token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
}


export default withRouter(App);
