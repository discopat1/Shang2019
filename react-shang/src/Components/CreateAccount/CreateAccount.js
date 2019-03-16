import React, {Component} from 'react';
import './CreateAccount.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



class AccountModal extends Component {



    render(){
        return(
            <Modal.Dialog>
                <Modal.Header closeButton>
                <Modal.Title>Shangri-La Sign Up</Modal.Title>
                </Modal.Header>
            <Modal.Body>
                <Form inline>
                <FormControl type="First Name" placeholder="First Name" className="mr-sm-2" />
                <FormControl type="Last Name" placeholder="Last Name" className="mr-sm-2" />
                <FormControl type="Email" placeholder="Email" className="mr-sm-2" />
                <FormControl type="username" placeholder="Username" className="mr-sm-2" />
                <FormControl type="password" placeholder="Password" className="mr-sm-2" />
                <Button variant="outline-primary">Log In</Button>
                <Button variant="outline-success">Create Account</Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary">Close</Button>
                <Button variant="primary">Save changes</Button>
            </Modal.Footer>
            </Modal.Dialog>
        )
    }
}
       


export default AccountModal;