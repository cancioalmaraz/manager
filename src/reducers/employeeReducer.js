import types from "../types/types";

const initialState = {
    employees: []
};

const employeeReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.employeeLoad:
            return {
                employees: action.payload
            };
        case types.employeeAdd:
            return {
                employees: [ ...state.employees , action.payload ]
            };
        case types.employeeCleaningLogout:
            return {
                employees: []
            };
        default:
            return state;
    }

};

export default employeeReducer;