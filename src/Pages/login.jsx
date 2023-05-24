import React from 'react';
import Container from 'react-bootstrap/Container';

import Button from 'react-bootstrap/Button';
import { useState } from 'react';




const Login = () => {

    const [userName, setName] = useState('');
    const [pass, setPass] = useState('');

    const setNamevalue = (event) => {
        setName(event.target.value);


    }

    const setPassvalue = (event) => {
        setPass(event.target.value);


    }

    const Submit = (event) => {

        event.preventDefault();
        // console.log(userName);
        // console.log(pass);
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            body: JSON.stringify({ username: userName, password: pass }),
            headers: {
                'Content-Type': 'application/json',
                "Accept": "application/json"
            },
        })
            .then((response) => {
                if (response.status === 200)

                    return response.json()
                else
                    // console.log("Fail")
                    return null
            })

            .then((data) => {

                if (data != null) {

                    console.log("Next Pae")
                    window.location.href = "/Pagniation";

                }

                else {
                    console.log("Not Found")
                    alert("Please enter valid username and password")
                    // Handle the response from the API
                }

            })
            .catch((error) => {
                // Handle any errors
                console.error('Error:', error);
            });
    };

    return (
        <>
            <div className="login-main-bg">
                <Container>

                 
                        <div className="login-card">
                                <div className="login-heading">
                                    <h5>Welocme User</h5>
                                    <p>Read More Blogs !!!</p>
                                </div>
                           
                            <div className="main-content">
                                <div className="user-section">
                                    <p>UserName</p>
                                    <input type="text" className='form-control' value={userName} onChange={setNamevalue} />
                                </div>

                                <div className="user-section">
                                    <p>Password</p>
                                    <input type="Password" className='form-control'  value={pass} onChange={setPassvalue} />
                                </div>

                                <div className="user-section">
                                    <Button className="btn btn-primary" type='submit' onClick={Submit} >Log In</Button>
                                </div>

                            </div>
                        </div>
                  
              
            </Container>
        </div >
        </>
    )
}


export default Login