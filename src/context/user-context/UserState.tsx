import React, {useReducer} from 'react'
import { useMoralis } from "react-moralis";
import { ethers } from "ethers";

import UserReducer from "./UserReducer";
import UserContext from '@context/user-context/UserContext';


const UserState = (props: any) => {

    const  {Moralis, authenticate, logout } = useMoralis()

    const initialState  = {
      userRender:[],
      loginType:'',
      authenticated: false,
      GetUser: [],
      GetUserAvatar:[],
      GetUserCollection:[]
    }
    
    const [state, dispatch] = useReducer(UserReducer, initialState)

    const Login = async () => {
      
      if (!state.authenticated) {

        await authenticate({signingMessage: "Welcome to Koolinart" })
          .then(function (user) {
            console.log("logged in user:", user);
            console.log(user.get("ethAddress"));
            const userMarketType = user.get("loginType")
            console.log("loginType", userMarketType);

            dispatch({
              type: 'USER_AUTHENTICATED',
              payload: true
            })
            dispatch({
              type: 'GET_LOGIN_TYPE',
              payload: userMarketType
            })
            dispatch({
              type: 'USER_RENDER',
              payload: user
            })
            console.log("USER_RENDER", user);
            return
          })
          .catch(function (error) {
            console.log(error);
          });

      }
    }

    const LoginMail = async (values: any) => {
      if (!state.authenticated) {
        console.log((state.authenticated))
        await Moralis.User.logIn( values.username, values.password)
          .then(function (user) {
            console.log("logged in user:", user);
            console.log(user.get("ethAddress"));
            const userMarketType = user.get("loginType")
            console.log("loginType", userMarketType);
            dispatch({
              type: 'USER_AUTHENTICATED',
              payload: true,
              
            })
            dispatch({
              type: 'GET_LOGIN_TYPE',
              payload: userMarketType
            })
            dispatch({
              type: 'USER_RENDER',
              payload: user
            })  
  
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }

    const SetLoginMail = async (values: any) => {
      
      const user = new Moralis.User();

      user.set("fullname", values.fullname);
      user.set("username", values.username);
      user.set("email", values.email);
      user.set("password",  values.password);

      const wallet = ethers.Wallet.createRandom()
      user.set("mnemonic", wallet.mnemonic.phrase)
      user.set("privateKey", wallet.privateKey)
      user.set("ethAddress", wallet.address)
      user.set("loginType", "email")

      
      try {
        await user.signUp();
        user.save()

        // Hooray! Let them use the app now.
      } catch (error) {
        // Show the error message somewhere and let the user try again.
        alert("Error: " + error.code + " " + error.message);
      }
      
    }

    const SettingsUser = async () => {

      await Moralis.Cloud.run('SetSettingsUser', { owner: useraddress, bio })


      // dispatch({
      //   type: 'GET_USER',
      //   payload: results
      // })

    }

    const LogoutFunc = async() => {

      if (state.authenticated ) {

        await Moralis.User.logOut()
        dispatch({
          type: 'USER_AUTHENTICATED',
          payload: false
        })

      }
    }

    return (

        <UserContext.Provider value={{
            userRender: state.userRender,
            loginType: state.loginType,
            authenticated: state.authenticated,
            GetUser: state.GetUser,
            GetUserAvatar: state.GetUserAvatar,
            GetUserCollection: state.GetUserCollection,

            Login,
            LogoutFunc,
            SettingsUser,
            SetLoginMail,
            LoginMail,
        }}>

            {props.children}

        </UserContext.Provider>

    )
}

export default UserState;