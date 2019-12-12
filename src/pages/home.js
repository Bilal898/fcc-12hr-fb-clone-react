import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'
import Scream from '../components/Scream'

export class home extends Component {
    
    state = {
        screams: null
    }
    componentDidMount(){
        axios.get('/screams')
        .then(res => {
            this.setState({
                screams: res.data
            })
        })
        .catch(err => console.log(err))
    }
    render() {
        let recentScreamsMarkup = this.state.screams ? (
            this.state.screams.map(scream => <p><Scream scream={scream} /></p>)
        ) : <p>Loading...</p>
        return (
            <div>
                <Grid container spacing={16}>
                    <Grid item sm={8} xs={12}>
                        <p>{recentScreamsMarkup}</p>
                    </Grid>
                    
                    <Grid item sm={4} xs={12}>
                        <p>Profile...</p>
                    </Grid>
                    
                </Grid>
            </div>
        )
    }
}

export default home
