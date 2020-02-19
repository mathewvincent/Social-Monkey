import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles={
    mainContainer:{
        "text-align": "center"
    }
}

class home extends Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.mainContainer}>
                <Grid container >
                    <Grid item  sm={8} xs={12}>left</Grid>
                    <Grid item  sm={4} xs={12}>right</Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(home);


