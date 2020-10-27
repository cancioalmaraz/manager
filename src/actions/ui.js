import types from "../types/types";

export const setMessageError = ( error ) => ({
    type: types.uiSetError,
    payload: error
});

export const removeMessageError = () => ({
    type: types.uiRemoveError,
});

export const startLoading = () => ({
    type: types.uiStartLoading
});

export const finishLoading = () => ({
    type: types.uiFinishLoading
});