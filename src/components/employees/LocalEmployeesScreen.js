import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import { Typography, Button, Divider } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LocalEmployeeList from './LocalEmployeeList';

const LocalEmployeesScreen = () => {

    const history = useHistory();

    const { employees } = useSelector(state => state.employee);

    const handleAddButton = () => {
        history.push('/employees/trello');
    };

    return (
        <div
            className="animate__animated animate__fadeIn"
        >
            <Typography variant="h4">Local Employees</Typography>
            <Divider/>
            <Button
                color="primary"
                onClick={ handleAddButton }
            >
                <AddIcon /> <Typography>Crear Empleado</Typography>
            </Button>

            <LocalEmployeeList employees={ employees } />

        </div>
    )
}

export default LocalEmployeesScreen;
