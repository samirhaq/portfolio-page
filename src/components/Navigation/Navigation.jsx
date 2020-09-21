import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import classnames from "classnames";

export class Navigation extends Component {
    // constructor(props) {
    //     super(props);
    
    //     this.state = {
    //       prevScrollPos: window.pageYOffset,
    //       visible: true
    //     };
    // }

    // // Adds an event listener when the component is mount.
    // componentDidMount() {
    //     window.addEventListener("scroll", this.handleScroll);
    // }

    // // Remove the event listener when the component is unmount.
    // componentWillUnmount() {
    //     window.removeEventListener("scroll", this.handleScroll);
    // }

    // handleScroll = () => {
    //     const { prevScrollPos } = this.state;
    
    //     const currentScrollPos = window.pageYOffset;
    //     const visible = prevScrollPos > currentScrollPos;
    
    //     this.setState({
    //       prevScrollPos: currentScrollPos,
    //       visible
    //     });
    // };
 
    render() {
        return (
        <Navbar bg="info" variant="dark" fixed="top">
            <Navbar.Brand href="#home">Samir</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
        </Navbar>
        );
    };
};

export default Navigation