import React from 'react';
import AppRouter from './routers/AppRouter';
import 'animate.css';
import { Provider } from 'react-redux';
import store from './store/store';

const ManageApp = () => {
    return (
        <Provider store={ store }>
            <AppRouter />
        </Provider>
    )
};

export default ManageApp;
