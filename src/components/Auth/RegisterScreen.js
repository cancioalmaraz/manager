import { Button, Grid, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import validator from 'validator';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';
import { removeMessageError, setMessageError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';
// import { login } from '../../actions/auth';

const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'inline-block',
        padding: theme.spacing(3),
        width: '50%',
        margin: 'auto',
    },

    field: {
        padding: '15px'
    },

    button: {
        padding: '15px',
        width: '50%'
    }

}));

const RegisterScreen = () => {

    const history = useHistory();
    const classes = useStyles();
    const dispatch = useDispatch();
    const [ { name, email, password, password2 }, handleInputChange ] = useForm({
        name: 'David',
        email: 'david@gmail.com',
        password: '123456',
        password2: '123456'
    });

    const handleRegister = (e) => {
        if ( isValid() ){
            dispatch( startRegisterWithEmailPasswordName(email, password, name) );
        }
        history.push('/');
    };

    const isValid = () => {
        if ( name.length ===0 ){
            dispatch( setMessageError('Name is required') );
            return false;
        } else if ( !validator.isEmail( email ) ){
            dispatch( setMessageError('Email invalid') );
            return false;
        } else if ( password !== password2 || password.length < 5 ){
            dispatch( setMessageError('Password error') );
            return false;
        }
        dispatch( removeMessageError() );
        return true;
    };

    return (
        <Paper
            className={ `${ classes.paper } animate__animated animate__fadeInLeft` }>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Typography variant="h4" >Register</Typography>
                <Grid className={ classes.field } >
                    <TextField
                        name="name"
                        label="Name"
                        autoComplete="off"
                        value={ name }
                        onChange={ handleInputChange }
                    />
                </Grid>
                <Grid className={ classes.field } >
                    <TextField
                        name="email"
                        label="Email"
                        autoComplete="off"
                        value={ email }
                        onChange={ handleInputChange }
                    />
                </Grid>
                <Grid className={ classes.field } >
                    <TextField
                        name="password"
                        label="Password"
                        type="password"
                        autoComplete="off"
                        value={ password }
                        onChange={ handleInputChange }
                    />
                </Grid>
                <Grid className={ classes.field } >
                    <TextField
                        name="password2"
                        label="Confirm Password"
                        type="password"
                        autoComplete="off"
                        value={ password2 }
                        onChange={ handleInputChange }
                    />
                </Grid>
                <Grid className={ classes.button } >
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth={ true }
                        onClick={ handleRegister }
                    >
                        Register
                    </Button>
                </Grid>
                <Typography>
                    <Link
                        to="/auth/login"
                    >
                        Already Register?
                    </Link>
                </Typography>
            </Grid>
        </Paper>
    )
}

export default RegisterScreen;