import React, { useState, useEffect } from 'react';
import {Link } from "react-router-dom"


function Signup () {
    const [formData, setFormData] = useState({})

    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        }
        fetch('http://localhost:9090/users/register', requestOptions)
            .then(response => response.json())
            .then(data => {
                if(data.status == 200) {
                    return console.log('successfull')
                }
                console.log(data.message)
            } )
            .catch(err => console.log(err))
    })

    const handleFormSubmit = (event) => {
        event.preventDefault()
        const form = document.querySelector('form')
        const data = Object.fromEntries(new FormData(form).entries())
        setFormData(data)
    }

    return (
        <div>
            <h2>Signup route</h2>
                <form onSubmit={handleFormSubmit} >
                <input type="text" name="username" placeholder="username"  required />
                <input type="email" name="email" placeholder="email" required />
                <input type="password" name="password" placeholder="password" required />
                <input type="password" name="confirmPassword" placeholder="confirm password" required />
                <input type="text" name="firstName" placeholder="first name" required />
                <input type="text" name="lastName" placeholder="last name" required />
                <input type="submit" value="signup" />
                {/* <button type="submit" onClick={handleFormSubmit}>signup</button> */}
        </form>
            <br></br>
            <Link to='/users/login'>Login instead?</Link>
        </div>
    );
}

export default Signup;

// import React, { Component } from 'react';

// export default class Register extends Component {
//     state = {
//         username: "",
//         password: "",
//         repeatPassword: ""
//     }

//     handleInputChange = (event) => {
//         this.setState({[event.target.id]: event.target.value });
//     }

//     onFormSubmit = () => {
//         const { username, password, repeatPassword } = this.state;
//         this.props.handleNameChange(username, password, repeatPassword);
//         this.props.history.push("/");
//     }

//     render() {        
//         return (
//             <div className="register-from">
//                 <input id="username" placeholder="Username" onChange={this.handleInputChange} />
//                 <input id="password" placeholder="Password" onChange={this.handleInputChange} />
//                 <input id="repeatPassword" placeholder="Repeat password" onChange={this.handleInputChange} />
//                 <button onClick={this.onFormSubmit}>Submit</button>
//             </div>
//         );
//     }
// }