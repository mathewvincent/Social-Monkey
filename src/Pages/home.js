import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';

class home extends Component {
    render() {
        return (
            <div>
                <Grid container >
                    <Grid item  sm={8} xs={12}>left</Grid>
                    <Grid item  sm={4} xs={12}>right</Grid>
                </Grid>
            </div>
        )
    }
}

export default home;


