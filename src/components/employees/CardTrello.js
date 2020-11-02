import React from 'react';
import { Card, CardActionArea, CardContent, makeStyles, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { startAddEmployee } from '../../actions/employee';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    content: {
        padding: theme.spacing(1),
        width: '250px'
    },
}));

const CardTrello = ({ fullName, id }) => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const handleClickCard = () => {
        dispatch( startAddEmployee( id, fullName, history ) );
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
        </div>
    )
}

export default CardTrello;
