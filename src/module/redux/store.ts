import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import {useReducer} from "react";
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";
export interface UserInfo{
  id: string
  img: string
  token: string
}
const reducers = combineReducers({
  user: userReducer,
})

const persistConfig = {
  key: "root",
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer
  , middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false})
  , devTools: true,

})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;