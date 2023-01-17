import {TOKEN_FUNCTION, USERINFO} from '../ActionTypes'

export const setTokenFunction = (data) => {
    return { type: TOKEN_FUNCTION, payload: data }
};
export const setUserInfo= (data) => {
    return { type: USERINFO, payload: data }
};
