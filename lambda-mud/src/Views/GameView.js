import React, { Component } from 'react';
// import {Route, withRouter} from 'react-router-dom';
// import axios from 'axios';
import './Views.css';

class GameView extends React.Component {
  constructor(props){
    super(props);
    this.state ={
        textOutput: "",
        input: ""
    };
  }
  render(){
    return (
        <div className="gameview">
            <nav className="navigation-panel">
              <h1>Lambda MUD</h1>
              <br></br>
              <button onClick={() => this.logout()}  
                      className="logout-button">
                      Log out</button>
            </nav>
            <div className="display-panel">
                <h1>Main Screen</h1>
                <div className='main-screen'>
                    
                </div>
            </div>
        </div>
    )
  }
  logout() {
    // Clear Access Token and ID Token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('expires_at');
    this.props.history.push("/login");         
  }
}

export default GameView;