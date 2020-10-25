import { makeStyles } from '@material-ui/core';
import React from 'react';
import BoardCard from './BoardCard';

const useStyles = makeStyles((theme) => ({
    boardList: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    boardItem: {
        width: '250px',
    },
}));

const BoardList = ({ boardList = [] }) => {

    const classes = useStyles();

    const handleClickCard = () => {
        console.log("Click A Card!!!");
    };

    return (
        <div className={ classes.boardList }>
            {
                boardList.map( board => (
                    <div className={ classes.boardItem } key={ board } onClick={ handleClickCard }>
                        <BoardCard  key={ board } board={ board }/>
                    </div>
                ))
            }
        </div>
    )
}

export default BoardList;
