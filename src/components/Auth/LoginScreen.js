import { Button, CircularProgress, Grid, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLoginWithEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

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

const LoginScreen = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.ui);
    const [ { email, password }, handleInputChange ] = useForm({
        email: 'david@gmail.com',
        password: '123456'
    });

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch( startLoginWithEmailPassword( email, password ) );
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
                <Typography variant="h4" >Login</Typography><br/>

                <form
                    onSubmit={ handleLogin }
                >
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
                        Login
                    </Button>
                </form>
                
                <Typography>
                    <Link
                        to="/auth/register"
                    >
                        Create New Account
                    </Link>
                </Typography>
            </Grid>
        </Paper>
    )
}

export default LoginScreen;
