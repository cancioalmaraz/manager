import React from 'react';
import { Card, CardActionArea, CardContent, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    content: {
        padding: theme.spacing(1),
        width: '250px'
    },
}));

const LocalEmployeeCard = ({ fullName, trello_id }) => {

    const classes = useStyles();

    const handleClickCard = () => {
        console.log("A dashBoard");
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
