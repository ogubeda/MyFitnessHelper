import { LOGIN, LOGOUT } from "../constants";
import AuthType from "../types";

export const authState: AuthType = {
    username: "",
    userType: "",
    isAuthenticated: false,
    isLoading: false
}

const authReducer = (state: AuthType = authState, action: any) => {
    
    switch(action.type) {
        case LOGIN:
            return {
                ...state, username: action.username, userType: action.userType, isAuthenticated: true
            }
        
        case LOGOUT:
            return {
                ...state, authState
            }

        default:
            return state

    }
}

export default authReducer
