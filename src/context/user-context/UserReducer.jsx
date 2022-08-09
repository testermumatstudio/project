import {
    USER_AUTHENTICATED,
    GET_USER, 
    GET_USER_AVATAR , 
    GET_USER_COLLECTION,
    GET_LOGIN_TYPE,
    USER_RENDER
} from './action-types'

export default function ( state, action ){

   const {payload, type} = action;

   switch(type){
        case USER_RENDER:
        return {
            ...state,
            userRender: payload
        }
        case USER_AUTHENTICATED:
        return {
            ...state,
            authenticated: payload
        }
        case GET_LOGIN_TYPE:
            return {
                ...state,
                loginType: payload
            }
        case GET_USER:
        return {
            ...state,
            GetUser: payload
        }
        case GET_USER_AVATAR: 
        return {
            ...state,
            GetUserAvatar: payload
        }
        case GET_USER_COLLECTION: 
        return {
            ...state,
            GetUserCollection: payload
        }
   }

}