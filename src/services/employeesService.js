import axios from 'axios';
import { db } from '../firebase/firebase-config';

class EmployeeService {
    
    constructor() {
        this.axiosInstance = new axios.create({
            baseURL: 'https://api.trello.com/1'
        });
    }

    getEmployeesTrello = () => {

        const params = {
            key     : 'a341ec65dcb1a3d85276e5b7f49abbfa',
            token   :  '1f919d3f16e96739758e0ceaf49e397317b9339f66016c72e98a673930d927d9'
        };

        const config = {
            params: params,
        };

        return this.axiosInstance.get('organizations/a2odev/members', config);

    }

    loadEmployees = async( uid ) => {
        const employeesSnap = await db.collection(`${ uid }/manager/employees`).get();
        const employees = [];

        employeesSnap.forEach( snapChild => {
            employees.push({
                id: snapChild.id,
                ...snapChild.data()
            });
        });

        return employees;
    }
    
}

export default EmployeeService;