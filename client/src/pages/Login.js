import React, { Component } from 'react';

export default class Login extends Component {
    state = {
        username: "",
        password: ""
    }

    handleInputChange = (event) => {
        this.setState({[event.target.id]: event.target.value });
    }

    onFormSubmit = () => {
        const { username, password } = this.state;
        this.props.handleNameChange(username, password);
        this.props.history.push("/");
    }

    render() {        
        return (
            <div className="login-from">
                <input id="username" placeholder="Username" onChange={this.handleInputChange} />
                <input id="password" placeholder="Password" onChange={this.handleInputChange} />
                <button onClick={this.onFormSubmit}>Submit</button>
            </div>
        );
    }
}