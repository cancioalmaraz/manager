import { makeStyles } from '@material-ui/core';
import React from 'react';
import LocalEmployeeCard from './LocalEmployeeCard';

const useStyles = makeStyles((theme) => ({
    employeeList: {
        display: 'flex',
        flexWrap: 'wrap'
    }
}));

const LocalEmployeeList = ({ employees = [] }) => {

    const classes = useStyles();

    return (
        <div className={ classes.employeeList }>
            {
                employees.map((employee)=>(
                    <LocalEmployeeCard key={ employee.trello_id } { ...employee }/>
                ))
            }
        </div>
    )
}

export default LocalEmployeeList;
