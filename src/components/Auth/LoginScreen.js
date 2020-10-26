import { Button, Grid, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { login, startGoogleLogin } from '../../actions/auth';

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
        width: '35%'
    },

    socialNetworks: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingTop: '5px',
        paddingBottom: '5px',
        width: '90%'
    },

    googleIconWrapper: {
        position: 'right',
        marginTop: '5px',
        marginLeft: '5px',
        width: '35px',
        height: '35px',
        borderRadius: '2px',
        backgroundColor: 'white',
    },

    googleButton: {
        cursor: 'pointer',
        display: 'flex',
        marginTop: '5px',
        width: '75%',
        height: '42px',
        backgroundColor: '#4285f4',
        borderRadius: '2px',
        boxShadow: '0 3px 4px 0 rgba(0, 0, 0, 0.25)',
    },

    googleIcon: {
        position: 'center',
        marginTop: '11px',
        marginLeft: '0',
        width: '18px',
        height: '18px',
    },

    btnText: {
        float: 'right',
        margin: '10px 15px 0 15px',
        color: 'white',
        fontSize: '12px',
        letterSpacing: '0.2px',
    }

}));

const LoginScreen = () => {

    const history = useHistory();
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleLogin = (e) => {
        dispatch( login( 232123, 'Cancio' ) );
        history.push('/');
    };

    const handleGoogleLogin = () => {
        dispatch( startGoogleLogin() );
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
                <Typography variant="h4" >Login</Typography>
                <Grid className={ classes.field } >
                    <TextField
                        name="email"
                        label="Email"
                        autoComplete="off"
                    />
                </Grid>
                <Grid className={ classes.field } >
                    <TextField
                        name="password"
                        label="Password"
                        type="password"
                        autoComplete="off"
                    />
                </Grid>
                <Grid className={ classes.button } >
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth={ true }
                        onClick={ handleLogin }
                    >
                        Login
                    </Button>
                </Grid>
                <div className={ classes.socialNetworks }>
                    
                    <p>Login With Social Networks</p>
                    
                    <div
                        onClick={ handleGoogleLogin }
                        className={ classes.googleButton }
                    >
                        <div className={ classes.googleIconWrapper }>
                            <img className={ classes.googleIcon } src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p
                            className={ classes.btnText }
                        >
                            Sign in with google
                        </p>
                    </div>
                </div>
                {/* <Button
                    variant="contained"
                    color="default"
                    className={classes.button}
                    startIcon={<CloudUploadIcon />}
                >
                    Sign in with Google
                </Button> */}
                <br/>
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
