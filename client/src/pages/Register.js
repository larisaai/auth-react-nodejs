import React, { Component } from 'react';

export default class Register extends Component {
    state = {
        username: "",
        password: "",
        repeatPassword: ""
    }

    handleInputChange = (event) => {
        this.setState({[event.target.id]: event.target.value });
    }

    onFormSubmit = () => {
        const { username, password, repeatPassword } = this.state;
        this.props.handleNameChange(username, password, repeatPassword);
        this.props.history.push("/");
    }

    render() {        
        return (
            <div className="register-from">
                <input id="username" placeholder="Username" onChange={this.handleInputChange} />
                <input id="password" placeholder="Password" onChange={this.handleInputChange} />
                <input id="repeatPassword" placeholder="Repeat password" onChange={this.handleInputChange} />
                <button onClick={this.onFormSubmit}>Submit</button>
            </div>
        );
    }
}