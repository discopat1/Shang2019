import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
import classnames from "classnames";
import "./Login.css"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/mylineup");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/mylineup"); // push user to mylineup when they login
    }
if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
        
      });
    }
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
    this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
};
render() {
    const { errors } = this.state;
return (
            <Container id="firstpage-main">
                <div className="firstpage-content">
                    <h3><span className="not-bold">Welcome to your</span> Shangri-La <span className="not-bold">app</span>! </h3>
                    <h5>Browse stages above to find new, and favorite bands</h5>
                    <h6>myLineup <FontAwesomeIcon icon="user-check"></FontAwesomeIcon>  is a personalized, shareable lineup of the shows you don't want to miss!</h6>
                    <h6>Login below to access your myLineup</h6>
    
            <Form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  placeholder="Email"
                  className={classnames("mr-sm-2", {
                    invalid: errors.email || errors.emailnotfound
                  })}
                />
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  placeholder="Password"
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                />
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <Button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  variant="outline-success"
                >
                  Login
                </Button>
                <br/>
                <br/>
                <h6>First time user? Create an account now to access myLineup  <FontAwesomeIcon icon="user-check"></FontAwesomeIcon></h6>
                <Link to="/register" className="btn btn-outline-primary" id="create-account-button">Create Account</Link> 
              </div>
            </Form>
          </div>
      </Container>
    );
  }
}
Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  export default connect(
    mapStateToProps,
    { loginUser }
  )(Login);