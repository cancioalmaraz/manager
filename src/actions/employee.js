import types from "../types/types";
import { db } from "../firebase/firebase-config";
import EmployeeService from "../services/employeesService";
import Swal from 'sweetalert2';
import { finishLoading, startLoading } from "./ui";

export const startAddEmployee = ( trello_id, fullName, email, dni, desc, history ) => {
    return ( dispatch, getState ) => {
        const { auth:{ uid } } = getState();
        let newEmployee = {
            trello_id,
            fullName,
            email,
            dni,
            desc
        };
        db.collection(`${ uid }/manager/employees`)
            .add( newEmployee )
            .then( data => {
                dispatch( addEmployee( data.id, newEmployee ) );
                Swal.fire(
                    'Saved',
                    'Saved Success',
                    'success'
                );
                history.push(`/employees/${ data.id }`);
            });
    };
};

export const addEmployee = ( id, newEmployee ) => ({
    type: types.employeeAdd,
    payload: {
        id,
        newEmployee
    }
});

export const startLoadEmployees = () => {
    return async( dispatch, getState ) => {
        dispatch( startLoading() );
        const { auth:{ uid } } = getState();
        const employeesService = new EmployeeService();
        const employees = await employeesService.loadEmployees( uid );
        dispatch( loadEmployees( employees ) );
        dispatch( finishLoading() );
    };
};

export const loadEmployees = ( employees ) => ({
    type: types.employeeLoad,
    payload: employees
});

export const cleaningEmployees = () => ({
    type: types.employeeCleaningLogout
});