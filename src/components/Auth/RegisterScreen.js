import { Button, CircularProgress, Grid, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';
import { removeMessageError, setMessageError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';
import Swal from 'sweetalert2';

const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'inline-block',
        padding: theme.spacing(3),
        width: '250px',
        margin: 'auto',
    },

    field: {
        paddingBottom: '10px',
        width: '90%'
    },

    button: {
        padding: '15px',
        margin: '10px 0 15px 0',
        width: '90%',
        height: '35px'
    },

    loader: {
        marginRight: '15px'
    }
}));

const RegisterScreen = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.ui);
    const [ { name, email, password, password2 }, handleInputChange ] = useForm({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const handleRegister = (e) => {
        e.preventDefault();
        if ( isValid() ){
            dispatch( startRegisterWithEmailPasswordName(email, password, name) );
        }
    };

    const isValid = () => {
        let valid = true;
        let error = '';
        if ( name.length === 0 ){
            error = 'Name is required';
            valid = false;
        } else if ( !validator.isEmail( email ) ){
            error = 'Email invalid';
            valid = false;
        } else if ( password !== password2){
            error = 'Passwords must be the same';
            valid = false;
        } else if( password.length < 6){
            error = 'Password should be at least 6 characters';
            valid = false;
        }
        if (!valid){
            dispatch( setMessageError(error) );
            Swal.fire(
                'Error',
                error,
                'error'
            );
        } else {
            dispatch( removeMessageError() );
        }
        return valid;
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
                <Typography variant="h4" >Register</Typography><br/>

                <form
                    onSubmit={ handleRegister }
                >
                    <TextField
                        className={ classes.field }
                        name="name"
                        label="Name"
                        autoComplete="off"
                        value={ name }
                        onChange={ handleInputChange }
                    />
                    <TextField
                        className={ classes.field }
                        name="email"
                        label="Email"
                        autoComplete="off"
                        value={ email }
                        onChange={ handleInputChange }
                    />
                    <TextField
                        className={ classes.field }
                        name="password"
                        label="Password"
                        type="password"
                        autoComplete="off"
                        value={ password }
                        onChange={ handleInputChange }
                    />
                    <TextField
                        className={ classes.field }
                        name="password2"
                        label="Confirm Password"
                        type="password"
                        autoComplete="off"
                        value={ password2 }
                        onChange={ handleInputChange }
                    />
                    <Button
                        type="submit"
                        className={ classes.button }
                        variant="contained"
                        color="primary"
                        disabled={ loading }
                    >
                        {
                            loading
                            &&
                            <CircularProgress
                                className={ classes.loader }
                                size={18}
                            />
                        }
                        Register
                    </Button>
                </form>
                
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