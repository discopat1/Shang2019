import React, { Component } from 'react';
import './Firstpage.css';
import { Link } from 'react-router-dom';
import API from "../../utils/API";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Firstpage extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit = e => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        console.log(userData);
    };

    render() {
        const { errors } = this.state;
        return (
            <Container id="firstpage-main">
                <div className="firstpage-content">
                    <h2><span className="not-bold">Welcome to your</span> Shangri-La <span className="not-bold">app</span>! </h2>
                    <h4>Browse stages above to find new, and favorite bands</h4>
                    <p>First time user? Log in now to access myLineup  <FontAwesomeIcon icon="user-check"></FontAwesomeIcon></p>
                    <p>myLineup is a personalized, shareable lineup of the shows you don't want to miss!</p>
                    <p>Login below in order to access your myLineup</p>

                    <Form noValidate onSubmit={this.onSubmit}>
                        <input onChange={this.onChange}
                            value={this.state.email}
                            error={errors.email}
                            id="email"
                            type="email" placeholder="Email"
                            className="mr-sm-2"
                        />
                        <input
                            onChange={this.onChange}
                            value={this.state.password}
                            error={errors.password}
                            id="password"
                            type="password"
                            placeholder="Password"
                            className="mr-sm-2"
                        />
                        <Button className="outline-primary" id="log-in-button" variant="outline-success" type="submit" onClick={this.handleLogin}>Log In</Button>
                        <Link to="/register" className="btn btn-outline-primary" id="create-account-button">Create Account</Link>
                    </Form>
                </div>

            </Container>
        );
    }
}

export default Firstpage;