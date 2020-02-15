import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types';
import Monkey from "../Images /see-no-evil-monkey.png"

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
    }
  };

class login extends Component {
    state={
        email:"",
        password:"",
        isLoading:false
    }

    onchangeHandler=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
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
                    <form >
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
                    </form>
                </Grid>
                <Grid item sm></Grid>
            </Grid>
        )
    }
}

login.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(login);