import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import {useReducer} from "react";

export interface UserInfo{
  id: string
  img: string
}


export const store = configureStore({
  reducer:{
    user: userReducer,
  },

})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;