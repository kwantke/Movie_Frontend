import {useEffect} from "react";
import axios from "axios";
import {useDispatch, useSelector} from 'react-redux';
import { setUser} from "../module/redux/userSlice";
import {RootState} from "../module/redux/store";
import {useAppSelector} from "../module/redux/hooks";

interface PropTypes{
  id: string;
  password: string;
  setRunLogin: (flag: boolean) => void;
  setFailedAlarm: (flag: boolean) => void;
  goMain: (id:string, img:string) => void;
  /*offFailedAlarm: () => void;*/
}
export default function RunLogin({
                                   id
                                   , password
                                   , setRunLogin
                                   , setFailedAlarm
                                   , goMain
                                  }:PropTypes){
  const loginUrl = process.env.REACT_APP_MAIN_LOGIN as string;
  let data ={
    id : id,
    password: password
  }

  //const {userId, img, isAuthenticated} = useAppSelector((state:RootState) =>state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.post(loginUrl,
        JSON.stringify(data),{
          headers: {
            "Content-Type": `application/json`,
          },
        }

    ).then(function (res) {
      //console.log(resp.data);
      if (res.data !== null && res.data != "") {
        if(res.data.errorCode == null) {
          console.log(res.data);
          console.log("로그인 성공");
          goMain(res.data.id,res.data.img);
        }
        else {
          console.log("로그인 실패");
          setFailedAlarm(true);
          /*offFailedAlarm();*/
          setRunLogin(false);
        }
      } else {
        console.log("로그인 실패");
        setFailedAlarm(true);
        /*offFailedAlarm();*/
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