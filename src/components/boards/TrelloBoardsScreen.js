import { CircularProgress, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import BoardsService from '../../services/boardsService';
import BoardTrelloList from './BoardTrelloList';

const TrelloBoardsScreen = () => {

    const [boards, setBoards] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const boardsService = new BoardsService();
        boardsService.getBoardsTrello()
            .then(({ data }) => {
                setBoards(data);
                setLoading(false);
            });
    }, []);

    return (
        <div
            className="animate__animated animate__fadeIn"
        >
            <Typography>Trello Boards</Typography>
            <hr/>
            {
                loading
                ?
                    <CircularProgress />
                :
                    <BoardTrelloList boards={ boards } />
            }
            
        </div>
    )
}

export default TrelloBoardsScreen;
