import {persistor} from "../index";

export const logout = async ()=>{

  await persistor.purge();
  alert("로그아웃되었습니다.");
  window.location.replace("/");
}

