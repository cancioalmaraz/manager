import React from 'react';
import { Card, CardActionArea, CardContent, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    content: {
        padding: theme.spacing(1),
        width: '250px'
    },
}));

const BoardTrelloCard = ({ name }) => {
    const classes = useStyles();

    const handleClickCard = () => {
        console.log('Click Card Trello Board');
    };

    return (
        <div className={classes.content}>
            <Card>
                <CardActionArea
                    onClick={ handleClickCard }
                >
                    <CardContent>
                        <Typography>{ name }</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default BoardTrelloCard
