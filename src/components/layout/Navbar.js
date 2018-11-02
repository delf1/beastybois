import React, {Component} from 'react';
import {Dropdown, Menu} from "semantic-ui-react";
import {Link} from "react-router-dom";

class Navbar extends Component {
    render() {

        return (
            <Menu inverted>
                <Menu.Menu position='right'>
                    <Dropdown item icon='user'>
                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to='/signin'>Sign In</Dropdown.Item>
                            <Dropdown.Item as={Link} to='/signup'>Sign Up</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                </Menu.Menu>
            </Menu>
        )
    }
}

Navbar.propTypes = {};

export default Navbar;
