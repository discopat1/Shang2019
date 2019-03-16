import React, {Component} from 'react';
import './Firstpage.css';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
//Can I put a modal inside of this component and have it
 //render from the on-click here??

class Firstpage extends Component{
    // state={
    //     first_name: this.
        
    // }

    // handleLogIn=(e)=>{
        //SET THE STATE AS USER LOGGED IN
    //     this.setState();

    //     }
    // handleSignUp=(e)=>{
        
    // }
    


    render(){
        return(
            <Container id="firstpage-main">
                <div className = "firstpage-content">
            <h2>Welcome to your Shangri-La app! </h2>
            <h4>Browse stages above to find new, and favorite bands</h4>
            <p>First time user? Log in now to access myLineup</p>
            <p>Swipe Right on a band you'd like to see, and we'll add it to your myLineup</p>
            <p>myLineup is an interactive, shareable lineup of bands you don't want to miss!</p>
            <p>Login below in order to access your myLineup</p>
            
            <Form>
            <FormControl type="band" placeholder="Search" className="mr-sm-2"/>
            <FormControl type="username" placeholder="Username" className="mr-sm-2"/>
            <Button className="outline-primary" variant="outline-success" type="Login" placeholder="Username" >Log In</Button>
            <Button className="outline-success" type= "password" variant="outline-primary" placeholder="Password" >Create Account</Button>
            </Form>
            </div>
                
            </Container>
        );
    }
}

export default Firstpage;