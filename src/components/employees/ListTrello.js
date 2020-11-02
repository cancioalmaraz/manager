import { makeStyles } from '@material-ui/core';
import React from 'react';
import CardTrello from './CardTrello';

const useStyles = makeStyles((theme) => ({
    employeeList: {
        display: 'flex',
        flexWrap: 'wrap'
    }
}));

const ListTrello = ({ employees = [] }) => {

    const classes = useStyles();

    return (
        <div className={ classes.employeeList }>
            {
                employees.map((employee)=>(
                    <CardTrello key={ employee.id } { ...employee }/>
                ))
            }
        </div>
    )
}

export default ListTrello;
