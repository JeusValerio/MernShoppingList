import React, { Component } from 'react';
import {
    Collapse, //responsive menu
    Navbar,
    NavbarToggle,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container //bootstrap container
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

                </Navbar>
            </div>
        }

    }




export default AppNavbar;