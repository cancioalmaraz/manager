import React from 'react';
import { makeStyles } from '@material-ui/core';
import BoardTrelloCard from './BoardTrelloCard';

const useStyles = makeStyles((theme) => ({
    boardList: {
        display: 'flex',
        flexWrap: 'wrap'
    }
}));

const BoardTrelloList = ({ boards = [] }) => {

    const classes = useStyles();

    return (
        <div className={ classes.boardList }>
            {
                boards.map((board)=>(
                    <BoardTrelloCard key={ board.id } { ...board } />
                ))
            }
        </div>
    )
}

export default BoardTrelloList;
