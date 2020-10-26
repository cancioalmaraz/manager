import types from "../types/types";

export const setMessageError = ( error ) => ({
    type: types.uiSetError,
    payload: error
});

export const removeMessageError = () => ({
    type: types.uiRemoveError,
});