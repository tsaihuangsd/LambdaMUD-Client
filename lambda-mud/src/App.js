import React, { Component } from 'react';
import {Route, withRouter} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <nav className="navigation-panel">
          <h1>Lambda Notes</h1>
          <br></br>
          <button onClick={() => this.props.history.push("/")}  
                  className="notelist-button">
                  View Your Notes</button><br></br>
          <button onClick={() => this.props.history.push("/create-note")}  
                  className="create-note-button">
                  + Create New Notes</button>
          </nav>
          <div className="display-panel">
          <Route  exact
                  path='/'
                  component={NoteListView}/>
          <Route  path="/note/:id"
                  component={NoteView}/>
          <Route  path='/create-note'
                  component={CreateNoteView}/>
          <Route  path='/edit/:id'
                  component={EditView}/>
          </div>


      </div>
    );
    isAuthenticated() {
      // Check whether the current time is past the
      // Access Token's expiry time
      let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
      return new Date().getTime() < expiresAt;
    }
    logout() {
            // Clear Access Token and ID Token from local storage
            localStorage.removeItem('access_token');
            localStorage.removeItem('expires_at');
            window.location.reload();            
    }
  }   
}


export default withRouter(App);
