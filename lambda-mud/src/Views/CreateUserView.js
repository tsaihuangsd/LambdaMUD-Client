import React from 'react';
import './Views.css';
import axios from 'axios';


class CreateUserView extends React.Component {
    constructor(props){
        super(props);
        this.state ={
          login:{
            username: "",
            password: ""
          },
          key: ""
        };
      }

    handleInput = event =>{
        event.preventDefault();
        this.setState({ ...this.state,
                        login:  {...this.state.login, 
                                [event.target.name]: event.target.value
                                }
                      });
    }
    handleLogin = () =>{
        console.log(this.state.login);
        axios.post('http://localhost:8000/api/login/', this.state.login)
              .then(response => {
                this.setState({...this.state,
                              key: response.data.key
                });
                localStorage.setItem("login_key", this.state.key);
                // console.log(localStorage.getItem("login_key")) 
                let expiresAt = JSON.stringify(
                  6000 + new Date().getTime()
                );
                // console.log(expiresAt);
                localStorage.setItem("expires_at", expiresAt);   
                this.props.history.push("/");       
              })
              .catch(err => console.log(err));
      }
    render(){
        return (
            <div className="createuserview-class">
                <h1>Please log in:</h1>
                <div className="loginPage">
                    <input  type="text"
                            className="username-input"
                            name="username"
                            value={this.state.login.username}
                            onChange={this.handleInput}/>
                    <input  type="text"
                            className="password-input"
                            name="password"
                            value={this.state.login.password}
                            onChange={this.handleInput}/>
                    <button className="login-button"
                            onClick={this.handleLogin}>Login</button>
                </div>
            </div>
    )}      
}


export default CreateUserView;