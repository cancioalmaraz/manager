import React, { useState } from 'react';
import { Backdrop, Button, Card, CardActionArea, CardContent, Divider, Fade, makeStyles, Modal, TextField, Typography } from '@material-ui/core';
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { startAddEmployee } from '../../actions/employee';
import { useHistory } from 'react-router-dom';
import validator from 'validator';

const useStyles = makeStyles((theme) => ({
    content: {
        padding: theme.spacing(1),
        width: '250px'
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '10'
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        alignItems: 'center',
        outline: 'none',
    },
    field: {
        paddingBottom: '10px',
        width: '90%',
    },
    containerButtons: {
        alignItems: 'right'
    },
    button: {
        margin: '10px 10px 10px 10px',
    }
}));

const initialErrors = {
    email: {
        exist: false,
        text: ''
    },
    dni: {
        exist: false,
        text: ''
    },
    desc: {
        exist: false,
        text: ''
    }
}

const CardTrello = ({ fullName, id: trello_id }) => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const [open, setOpen] = useState(false);
    const [errors, setErrors] = useState(initialErrors);
    const [ { email, dni, desc } , handleInputChange ] = useForm({
        email: '',
        dni: '',
        desc: '',
    });

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickCard = () => {
        handleOpen();
    };

    const handleSave = (e) => {
        e.preventDefault();
        const { ok, validErrors } = isValid();
        if ( ok ){
            dispatch( startAddEmployee( trello_id, fullName, email, dni, desc, history ) );
        } else {
            setErrors({
                ...initialErrors,
                ...validErrors
            });
        }
    };

    const isValid = () => {
        let ok = false;
        let validErrors = {};
        if ( validator.isEmpty( email ) ){
            validErrors = {
                ...validErrors,
                email: {
                    exist: true,
                    text: 'Email is Required'
                }
            };
        } else if ( !validator.isEmail( email ) ){
            validErrors = {
                ...validErrors,
                email: {
                    exist: true,
                    text: 'Email is invalid'
                }
            };
        } else if ( validator.isEmpty( dni ) ){
            validErrors = {
                ...validErrors,
                dni: {
                    exist: true,
                    text: 'DNI is required'
                }
            };
        } else if ( validator.isEmpty( desc ) ){
            validErrors = {
                ...validErrors,
                desc: {
                    exist: true,
                    text: 'Description is required'
                }
            };
        } else {
            ok = true;
        }
        return {
            ok,
            validErrors
        };
    };

    return (
        <div className={classes.content}>
            <Card>
                <CardActionArea
                    onClick={ handleClickCard }
                >
                    <CardContent>
                        <Typography>{ fullName }</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <form
                        className={classes.paper}
                        onSubmit={ handleSave }
                    >
                        <Typography variant="h5">Ingrese datos de empleado</Typography>
                        <Divider /><br/>
                        <TextField
                            className={ classes.field }
                            label="Email"
                            name="email"
                            autoComplete="off"
                            variant="outlined"
                            onChange={ handleInputChange }
                            value={ email }
                            error={ errors.email.exist }
                            helperText={ errors.email.text }
                        />
                        <TextField
                            className={ classes.field }
                            label="DNI"
                            name="dni"
                            autoComplete="off"
                            variant="outlined"
                            onChange={ handleInputChange }
                            value={ dni }
                            error={ errors.dni.exist }
                            helperText={ errors.dni.text }
                        />
                        <TextField
                            className={ classes.field }
                            name="desc"
                            label="Descripcion"
                            type="text"
                            variant="outlined"
                            multiline
                            rows={4}
                            onChange={ handleInputChange }
                            value={ desc }
                            error={ errors.desc.exist }
                            helperText={ errors.desc.text }
                        />
                        <div
                            className={ classes.containerButtons }
                        >
                            <Button
                                className={ classes.button }
                                variant="contained"
                                color="primary"
                                onClick={ handleClose }
                            >
                                Cancel
                            </Button>
                            <Button
                                className={ classes.button }
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                Save
                            </Button>
                        </div>
                    </form>
                </Fade>
            </Modal>
        </div>
    )
}

export default CardTrello;
