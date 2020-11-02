import { CircularProgress, Divider, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const EmployeeDashboard = () => {

    const { id } = useParams();
    const { employee:{ employees }, ui:{ loading: loadingEmployees } } = useSelector(state => state);
    const [loading, setLoading] = useState(true);
    const [employee, setEmployee] = useState({});

    useEffect(()=>{
        if (!loadingEmployees){
            const employeeF = employees.find( employee => employee.id === id );
            setEmployee( employeeF );
            setLoading(false);
        }
    }, [id, employees, loadingEmployees]);

    return (
        <>
            {
                loading
                ?
                    <CircularProgress/>
                :
                    <div
                        className="animate__animated animate__fadeIn"
                    >
                        <Typography variant="h5"> Employee DashBoard </Typography>
                        <Divider/><br/>
                        <Typography><strong>Name: </strong>{ employee.fullName }</Typography><br/>
                        <Typography><strong>Email: </strong>{ employee.email }</Typography><br/>
                        <Typography><strong>DNI: </strong>{ employee.dni }</Typography><br/>
                        <Typography><strong>Description: </strong>{ employee.desc }</Typography><br/>
                    </div>
            }
        </>
    )
}

export default EmployeeDashboard;
