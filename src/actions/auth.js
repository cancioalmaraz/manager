import { googleAuthProvider, firebase } from "../firebase/firebase-config";
import types from "../types/types";
import { finishLoading, startLoading } from "./ui";

export const startGoogleLogin = () => {
    return ( dispatch ) => {
        firebase.auth().signInWithPopup( googleAuthProvider )
            .then(({ user }) => {
                dispatch( login( user.uid, user.displayName ) );
            })
            .catch( console.log );
    };
};

export const startRegisterWithEmailPasswordName = ( email, password, name ) => {
    return ( dispatch ) => {
        dispatch( startLoading() );
        firebase.auth().createUserWithEmailAndPassword( email, password )
            .then( async({ user }) =>{
                await user.updateProfile({ displayName: name });
                dispatch(
                    login( user.uid, user.displayName )
                );
            })
            .catch( console.log )
            .finally(()=>{
                dispatch( finishLoading() );
            });
    };
};

export const startLoginWithEmailPassword = ( email, password ) => {
    return ( dispatch ) => {
        dispatch( startLoading() );
        firebase.auth().signInWithEmailAndPassword( email, password )
            .then(({ user })=>{
                dispatch( login( user.uid, user.displayName ));
            })
            .catch( console.log )
            .finally(()=>{
                dispatch( finishLoading() );
            });
    };
};

export const login = ( uid, displayName ) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});

export const startLogout = () => {
    return ( dispatch ) => {
        firebase.auth().signOut()
            .then(()=>{
                dispatch( logout() );
            })
            .catch( console.log );
    };
};

export const logout = () => ({
    type: types.logout
});