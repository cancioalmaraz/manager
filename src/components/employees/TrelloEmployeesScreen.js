import { CircularProgress, Divider, Typography } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import EmployeeService from '../../services/employeesService';
import ListTrello from './ListTrello';

const TrelloEmployeesScreen = () => {

    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);
    const { employees } = useSelector(state => state.employee);
    const isMounted = useRef(true);

    useEffect(()=>{
        if( isMounted.current ){
            const employeesService = new EmployeeService();
            employeesService.getEmployeesTrello()
                .then(({ data })=>{
                    const dataFiltered = data.filter( emt => {
                        let exist = false;
                        employees.forEach( eml => exist |= eml.trello_id === emt.id );
                        return !exist;
                    });
                    setList(dataFiltered);
                    setLoading(false);
                });
        }
        return ()=>{
            isMounted.current = false;
        };
    }, [employees]);

    return (
        <div
            className="animate__animated animate__fadeIn"
        >
            <Typography variant="h6">Trello Employees</Typography>
            <Divider />
            {
                loading
                ?
                    <CircularProgress/>
                :
                    <ListTrello employees={ list } />
            }
        </div>
    )
}

export default TrelloEmployeesScreen;
