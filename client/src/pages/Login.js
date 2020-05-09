import React, { useState, useEffect } from 'react';
import {Link } from "react-router-dom"


function Login () {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         email: "", 
    //         password: ""
    //     };
    //   }
    let email = "";
    let password = "";
    
    const submitForm = async (event) =>{
        event.preventDefault();
        await fetch('http://localhost:9090/users/login' , {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            }),
            credentials:"include",
            headers: {
                'Content-Type': 'application/json',
            }
        }).then( data => {
            if(data.status == 200) {
                data.json().then( json => {
                    // props.setUSerId(json.id)
                }).then(() =>{
                    console.log("user logggggggged in");
                    // history.push('/profilepage')
                } )             

            } 
            // else if(data.status === 404) {
            //     setError(true)
            // }
            else {
                console.log(data)
            }
        })
            
        }
  






    // const [formData, setFormData] = useState({})

    // useEffect(() => {
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(formData)
    //     }
    //     fetch('http://localhost:9090/users/login', requestOptions)
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
                
    //             if(data.status == 200) {
    //                 return console.log('successfull')
    //             }
    //             console.log("Message:" , data.message)
                
    //         } )
    //         .catch(err => console.log(err))
    // })

    // const handleFormSubmit = (event) => {
    //     event.preventDefault()
    //     const form = document.querySelector('.login-form')
    //     const data = Object.fromEntries(new FormData(form).entries())
    //     setFormData(data)
    // }

    return (
        <div>
            <h2>Login route</h2>
                <form className="login-form" onSubmit={submitForm} >
                    <input type="text" name="email" placeholder="email"  required />
                    <input type="text" name="password" placeholder="password" required />
                    <input type="submit" value="login" />
                </form>
            <br></br>
            <Link to='/users/register'>Register instead?</Link>
        </div>
    );
}

export default Login;

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