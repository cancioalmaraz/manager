import React from 'react';
import { Card, CardActionArea, CardContent, makeStyles, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    content: {
        padding: theme.spacing(1),
        width: '250px'
    },
}));

const LocalEmployeeCard = ({ fullName, id }) => {

    const classes = useStyles();
    const history = useHistory();

    const handleClickCard = () => {
        history.push(`/employees/${ id }`);
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

export default LocalEmployeeCard;
