import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import AppIcon from '../images/icon.png'
import {  Typography } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import {Link} from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress';
//redux
import { connect } from 'react-redux'
import { signupUser } from '../redux/actions/userActions'

const styles = (theme) => ({
    ...theme.spreadIt
  });

class signup extends Component {
    state = {
        email: '',
        password: '',
        confirmPassword: '',
        handle: '',
        errors: {}
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.UI.errors){
            this.setState({ errors: nextProps.UI.errors });
        }
    }
    handleSubmit = event => {
        event.preventDefault()
        this.setState({
            loading:true
        })
        const newUserData = {
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
            handle: this.state.handle,
        }
        this.props.signupUser(newUserData, this.props.history)
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        const {classes, UI: {loading} } = this.props
        const {errors} = this.state
        return (
            <Grid container className={classes.form}>
                <Grid item sm/>
                <Grid item sm>
                    <img src={AppIcon} alt="img" className={classes.image} />
                    <Typography variant="h4" className={classes.pageTitle}>
                    Signup
                    </Typography>
                    <form noValidate onSubmit={this.handleSubmit}>
                        <TextField 
                            id="email" name="email" 
                            helperText={errors.email}
                            error={errors.email ? true : false}
                            type="email" label="email"
                            className={classes.textField} fullWidth
                            value={this.state.email} onChange={this.handleChange}
                        />
                        <TextField 
                            id="password" name="password" 
                            type="password" label="Password"
                            helperText={errors.password}
                            error={errors.password ? true : false}
                            className={classes.textField} fullWidth
                            value={this.state.password} onChange={this.handleChange}
                        />
                        <TextField 
                            id="confirmPassword" name="confirmPassword" 
                            type="password" label="Confirm Password"
                            helperText={errors.confirmPassword}
                            error={errors.confirmPassword ? true : false}
                            className={classes.textField} fullWidth
                            value={this.state.confirmPassword} onChange={this.handleChange}
                        />
                        <TextField 
                            id="handle" name="handle" 
                            type="text" label="Handle"
                            helperText={errors.handle}
                            error={errors.handle ? true : false}
                            className={classes.textField} fullWidth
                            value={this.state.handle} onChange={this.handleChange}
                        />
                        {errors.general && (
                            <Typography variant="body2" 
                            className={classes.customError}>
                                {errors.general}
                            </Typography>
                        )}
                        <Button type="submit" variant="contained"
                        color="primary" className={classes.button} 
                        disabled={loading}
                        >Signup 
                            {loading &&
                            <CircularProgress size={20}
                            className={classes.progress} />}
                        </Button>
                        <br />
                        <small>Already have an account?  
                            <Link to="/login"> here</Link>
                        </small>
                    </form>
                </Grid>
                <Grid item sm/>
            </Grid>
        )
    }
}

signup.propTypes = {
    classes: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired,
    logoutUser: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    user: state.user,
    UI: state.UI
})

export default connect(mapStateToProps, {signupUser})(withStyles(styles)(signup))
