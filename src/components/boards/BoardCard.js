import React from 'react';
import { Card, CardActionArea, CardContent, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    content: {
        padding: theme.spacing(1),
    },
}));

const BoardCard = ({ board }) => {

    const classes = useStyles();

    return (
        <div className={classes.content}>
            <Card>
                <CardActionArea >
                    <CardContent >
                        <Typography ><strong>Tablero { board }</strong></Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default BoardCard;
