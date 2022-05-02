import { LOGIN, LOGOUT } from "../constants";

export const logIn = (username: string, userType: string) => {
    return {
        type: LOGIN, username: username, userType: userType
    }
}// end_logIn

export const logOut = () => {
    return {
        type: LOGOUT
    }
}// end_logOut