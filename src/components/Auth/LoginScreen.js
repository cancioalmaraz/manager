import { Button, Grid, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'inline-block',
        padding: theme.spacing(3),
        width: '30%',
        margin: 'auto',
    },

    field: {
        padding: '15px'
    },

    button: {
        padding: '15px',
        width: '55%'
    }

}));

const LoginScreen = () => {

    const history = useHistory();
    const classes = useStyles();

    const handleLogin = (e) => {
        e.preventDefault();
        history.push('/');
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
            </Grid>
        </Paper>
    )
}

export default LoginScreen;
