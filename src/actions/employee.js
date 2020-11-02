import types from "../types/types";
import { db } from "../firebase/firebase-config";
import EmployeeService from "../services/employeesService";
import Swal from 'sweetalert2';

export const startAddEmployee = ( trello_id, fullName, history ) => {
    return ( dispatch, getState ) => {
        const { auth:{ uid } } = getState();
        const newEmployee = {
            trello_id,
            fullName
        };
        db.collection(`${ uid }/manager/employees`)
            .add( newEmployee )
            .then( data => {
                dispatch( addEmployee( newEmployee ) );
                Swal.fire(
                    'Saved',
                    'Saved Success',
                    'success'
                );
                history.push('/employees');
            });
    };
};

export const addEmployee = ( newEmployee ) => ({
    type: types.employeeAdd,
    payload: newEmployee
});

export const startLoadEmployees = () => {
    return async( dispatch, getState ) => {
        const { auth:{ uid } } = getState();
        const employeesService = new EmployeeService();
        const employees = await employeesService.loadEmployees( uid );
        dispatch( loadEmployees( employees ) );
    };
};

export const loadEmployees = ( employees ) => ({
    type: types.employeeLoad,
    payload: employees
});

export const cleaningEmployees = () => ({
    type: types.employeeCleaningLogout
});