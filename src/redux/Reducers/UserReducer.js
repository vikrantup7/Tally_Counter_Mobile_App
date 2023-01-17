import {
    TOKEN_FUNCTION,
    USERINFO,
  } from '../ActionTypes';
  
  let initialState = {
    token: null,
    tokenfunc: null,
    Userinfo:[],
    };
  
  export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
      case TOKEN_FUNCTION:
        return {
          ...state,
          tokenfunc: action.payload,
        };
          case USERINFO:
            return {
              ...state,
              Userinfo: action.payload,
            };
        
      default:
        return state;
    }
  };
  