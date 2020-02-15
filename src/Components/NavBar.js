import React, { Component } from 'react'
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import {Link} from "react-router-dom"

class NavBar extends Component {
    render() {
        return (
            <div>
                <AppBar width="35px">
                    <Toolbar className="nav-bar" >
                        <Button color="inherit" component={Link} to="/">HOME</Button>
                        <Button color="inherit" component={Link} to="/login">Login</Button>
                        <Button color="inherit" component={Link} to="/signup">Signup</Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default NavBar;
