import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import authenticationService from "../services/AuthenticationService";


export const PrivateRoute = ({ component: Component, store, onSubmit, ...rest }) => (
    <Route {...rest} render={props => {
        const currentUser = authenticationService.currentUserValue;
        if (!currentUser) {
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }
        return <Component {...props} store={store} onSubmit={onSubmit} />
    }} />
);

export const PrivateRouteWithoutData = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        const currentUser = authenticationService.currentUserValue;
        if (!currentUser) {
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }
        return <Component {...props}/>
    }} />
);


export const PrivateRouteWithoutStore = ({ component: Component, onSubmit, ...rest }) => (
    <Route {...rest} render={props => {
        const currentUser = authenticationService.currentUserValue;
        if (!currentUser) {
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }
        return <Component {...props} onSubmit={onSubmit} />
    }} />
);

export const PrivateRouteWithoutSubmit = ({ component: Component, store, ...rest }) => (
    <Route {...rest} render={props => {
        const currentUser = authenticationService.currentUserValue;
        if (!currentUser) {
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }
        return <Component {...props} store={store} />
    }} />
);
