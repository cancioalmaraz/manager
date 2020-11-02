import React from 'react';
import { Button, Divider, Typography } from '@material-ui/core';
import BoardList from './BoardList';
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from 'react-router-dom';

const LocalBoardsScreen = () => {

    const boardList = [1,2,3,4,5,6,7];

    const history = useHistory();

    const handleAddButton = () => {
        history.push('/boards/trello');
    };

    return (
        <div
            className={`animate__animated animate__fadeIn`}
        >
            <Typography variant="h4">Local Boards</Typography>
            <Divider/>
            <Button
                color="primary"
                onClick={ handleAddButton }
            >
                <AddIcon /> <Typography>Crear Board</Typography>
            </Button>

            <BoardList boardList={ boardList } />

        </div>
    )
}

export default LocalBoardsScreen;
