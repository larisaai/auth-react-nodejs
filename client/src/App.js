

import React, { Component , useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Register from './pages/Register.js';
import Login from './pages/Login.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      welcomeMessage: <h2>Hello dear stranger!</h2>,
      apiResponse: ""
    }
  }
  // callAPI(){
  //   fetch("localhost:9090/users/login")
  //   .then( res => res.text())
  //   .then(res => this.setState({apiResponse: res}))
  // }
  // componentWillmMount() {
  //   this.callAPI();
  // }
  componentDidMount() {
    const welcomeMessageString = localStorage.getItem("welcomeMessage");
    if (welcomeMessageString) {
      const welcomeMessage = <h2>{welcomeMessageString}</h2>;
      this.setState({ welcomeMessage });
    }
  }
  onNameChange = (username, password) => {
    if (username !== "" && password !== "") {
      const welcomeMessageString = `Welcome back, ${username} `;
      const welcomeMessage = <h2>{welcomeMessageString}</h2>;
      this.setState({ welcomeMessage });
      localStorage.setItem("welcomeMessage", welcomeMessageString);
    }
  }
  render() {
    const {  welcomeMessage } = this.state;

    return (
      <Router >
        <div className="App" >

          <nav>
              <ul>
                <Link to="/">Home</Link>
              </ul>
              <ul>
                <Link to="/users/register">Register</Link>
              </ul> 
              <ul>
                <Link to="/users/login">Login</Link>
              </ul>
            
          </nav>

          <Switch>
              <Route exact path="/">
                  {welcomeMessage}
              </Route>
              <Route path="/users/register">
               <Register/> 
              </Route>
              <Route path="/users/login"
              component={(props) => <Login  {...props} handleNameChange={this.onNameChange} />} >
              </Route>
          </Switch>
        </div>
      </Router>
    );
  }

}

export default App;

