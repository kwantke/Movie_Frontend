import {useEffect} from "react";
import axios from "axios";
import {useDispatch, useSelector} from 'react-redux';
import { setUser} from "../module/redux/userSlice";


interface PropTypes{
  id: string;
  password: string;
  setRunLogin: (flag: boolean) => void;
  setFailMsg: (failMsg: string) => void;
  goMain: (id:string, img:string) => void;
}
export default function RunLogin({
       id
     , password
     , setRunLogin
     , setFailMsg
     , goMain
    }:PropTypes){
  const loginUrl = process.env.REACT_APP_MAIN_LOGIN as string;

  let data ={
    id : id,
    password: password
  }

   const dispatch = useDispatch();

  useEffect(() => {
    axios.post(loginUrl,
        JSON.stringify(data),{
          headers: {
            "Content-Type": "application/json",
          },
        }

    ).then(function (res) {
      //console.log(resp.data);
      if (res.data !== null && res.data != "") {
        if(res.data.errorCode == null) {
          console.log(res.data);
          console.log("로그인 성공");
          dispatch(setUser({
              userId: res.data.id
            , img: res.data.img
            , token: res.data.token
            , isAuthenticated: true})
          )
          goMain(res.data.id, res.data.img);
        }
        else {
          console.log("로그인 실패");
          setFailMsg(res.data.errorMessage);
          setRunLogin(false);
        }
      } else {
        setFailMsg(res.data.errorMessage);
        setRunLogin(false);
      }
    }).catch(function (err) {
      console.log(`Error Message: ${err}`);
    })

  },[id])

  return (
      <></>
  )
}