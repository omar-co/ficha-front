import { BehaviorSubject } from 'rxjs';
import { handleResponse } from '../helpers/HandleResponse';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')!));

export default class authenticationService  {

    static get currentUserValue () { return currentUserSubject.value; }

    static login(email, password) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        };

        return fetch(process.env.REACT_APP_API_URL +'/auth/login', requestOptions)
            .then(handleResponse)
            .then(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                currentUserSubject.next(user);

                return user;
            });
    }

    static logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        currentUserSubject.next(null);
        window.location.reload();
    }

}
