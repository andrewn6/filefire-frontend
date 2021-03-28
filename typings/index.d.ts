import API from '../api';

interface User {
    /**
     * User id
     */
    id: number;

    /**
     * Username
     */
    username: string;

    /**
     * Email
     */
    email: string;

    /**
     * Password
     */
    password: string;

    /**
     * Register date
     */
    registrationDate: Date;
    /**
     * last login
     */
    lastLogin: Date;
}