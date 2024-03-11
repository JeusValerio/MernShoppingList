import React, { Component } from 'react';
import {
    Collapse, //responsive menu
    Navbar,
    NavbarToggle,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container, //bootstrap container
    NavbarToggler
} from 'reactstrap';

class AppNavbar extends Component {
        state = {
            isOpen: false
        }
        ToggleEvent = () => {
            this.setState({
                isOpen: !this.state.isOpen
            });
        }

        render() {
            <div>
                <Navbar color = "dark" dark expand="sm" className="mb-5"> 
                    <Container>
                        <NavbarBrand href="/">ShoppingList</NavbarBrand>
                        <NavbarToggler OnClick={this.toggle}></NavbarToggler>
                        <Collapse isOpen={this.state.isOpen} navbar></Collapse>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/JeusValerio">
                                    Github
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        }

    }




export default AppNavbar;