import  { LOGIN, LOGOUT } from '../constants/actionTypes';

// For API actions
export const login = (session, profile) => ({
    type: LOGIN,
    payload: {
        session,
        profile,
    },
});
export const logout = () => ({
    type: LOGOUT,
});