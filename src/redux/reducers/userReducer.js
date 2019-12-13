import {
    SET_USER,
    SET_AUTHENTICATED,
    SET_UNAUTHENTICATED,
    LOADING_USER,
    LIKE_SCREAM,
    UNLIKE_SCREAM,
    MARK_NOTIFICATIONS_READ
  } from '../types';
//   loading: false,
  
  const initialState = {
    authenticated: false,
    credentials: {},
    likes: [],
    notifications: []
  };

  export default function(state = initialState, action){
      switch(action.type){
        case SET_AUTHENTICATED:
            return{
                ...state,
                authenticated: true
            }
        case SET_UNAUTHENTICATED:
            return{
                initialState
            }
        case SET_USER:
            return{
                authenticated: true,
                ...action.payload
            }
        
        default:
            return state
      }
  }