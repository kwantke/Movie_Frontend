import {createSlice} from "@reduxjs/toolkit";
import store from "./store";
import {PURGE} from "redux-persist";

interface UserState {
  userId: string;
  img: string;
  token: string;
  isAuthenticated: boolean;
}
// state(인자)의 초기값(유저 정보)
const initialState : UserState = {
  userId: "",
  img: "",
  token:"",
  isAuthenticated: false

}
//userSlice라는 이름으로 유저 Slice 생성
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers:{
    setUser: (state,action) =>{
      state.userId = action.payload.id;
      state.img = action.payload.img;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    initUser: state => {
      state.userId = initialState.userId;
      state.img = initialState.img;
      state.token = initialState.token;
      state.isAuthenticated = initialState.isAuthenticated;
    }
  },
  extraReducers: builder => {
    builder.addCase(PURGE, () => initialState);
  }

})

//actions
//dispatch로 액션을 전달해 상태를 어떻게 변화시킬지를 결정함
export const {setUser} = userSlice.actions;

//reducer
export default userSlice.reducer;