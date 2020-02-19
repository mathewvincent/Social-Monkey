import React, { Component } from 'react'
import {Link} from "react-router-dom"


import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';

import PropTypes from 'prop-types';
import Monkey from "../Images /see-no-evil-monkey.png"
import axios from "axios"

const styles = {
    rootcontainer: {
        "text-align": "center"
    },
    icon:{
        height:"30px",
        width:"30px",
        marginBottem:"20px"
    },
    formfield:{
        marginBottem:"10px",
        width:"1000px"
    },
    submitButton:{
        marginTop:"15px"
    }
  };

class signup extends Component {
    state={
        email:"",
        password:"",
        confirmPassword:"",
        isLoading:false
    }

    onchangeHandler=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    
    formSubmit=(event)=>{
        event.preventDefault();
        const fornValue = {
            email:this.state.email,
            password:this.state.password,
            confirmPassword:this.state.confirmPassword
        }
        axios.get("https://us-central1-socialmonkey-6a826.cloudfunctions.net/api/screams")
        .then( (response) =>{
            // handle success
            console.log(response);
        })
    }

    render() {
        const { classes } = this.props
        return (
                <Grid container className={classes.rootcontainer}>
                <Grid item sm></Grid>
                <Grid item sm>
                    <img src={Monkey} alt="Monkey with closed eyes" className={classes.icon}></img>
                    <br />
                    <form onSubmit={this.formSubmit}>
                        <TextField
                        id="email"
                        label="Email"
                        type="email"
                        name="email"
                        className="formfield"
                        onChange={this.onchangeHandler}
                        />
                        <br />
                        <TextField
                        id="password"
                        label="Password"
                        type="password"
                        name="password"
                        className="formfield"
                        onChange={this.onchangeHandler}
                        />
                        <br />
                        <TextField
                        id="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        name="confirmPassword"
                        className="formfield"
                        onChange={this.onchangeHandler}
                        />
                        <br />
                        <br />
                        <Button variant="contained" color="secondary" className="submitButton" type="submit">
                        Sign Up
                        </Button>
                    </form>
                    <small>Already have an account, Click <Link to="/login">here</Link></small>
                </Grid>
                <Grid item sm></Grid>
            </Grid>
           ) 
    }
}

signup.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(signup);