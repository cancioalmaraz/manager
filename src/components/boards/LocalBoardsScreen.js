import { Divider, Typography } from '@material-ui/core';
import React from 'react';
import BoardList from './BoardList';

const LocalBoardsScreen = () => {

    const boardList = [1,2,3,4,5,6,7];

    return (
        <div
            className={`animate__animated animate__fadeIn`}
        >
            <Typography variant="h4">Local Boards</Typography>
            <Divider/>

            <BoardList boardList={ boardList } />

        </div>
    )
}

export default LocalBoardsScreen;
