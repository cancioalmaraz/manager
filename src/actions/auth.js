import { googleAuthProvider, firebase } from "../firebase/firebase-config";
import types from "../types/types";

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
        firebase.auth().createUserWithEmailAndPassword( email, password )
            .then( async({ user }) =>{
                await user.updateProfile({ displayName: name });
                dispatch(
                    login( user.uid, user.displayName )
                );
            })
            .catch( console.log );
    };
};

export const login = ( uid, displayName ) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});