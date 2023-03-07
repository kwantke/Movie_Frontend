import {createSlice} from "@reduxjs/toolkit";
import store from "./store";

interface UserState {
  userId: string;
  img: string;
  isAuthenticated: boolean;
}
// state(인자)의 초기값(유저 정보)
const initialState : UserState = {
  userId: "",
  img: "",
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
      state.isAuthenticated = true;
    }
  }

})

//actions
//dispatch로 액션을 전달해 상태를 어떻게 변화시킬지를 결정함
export const {setUser} = userSlice.actions;

//reducer
export default userSlice.reducer;