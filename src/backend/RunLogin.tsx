import {useEffect} from "react";
import axios from "axios";

interface PropTypes{
  id: string;
  password: string;
  setRunLogin: (flag: boolean) => void;
  setFailedAlarm: (flag: boolean) => void;
  goMain: () => void;
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


  useEffect(() => {
    axios.post(loginUrl,
        null,
        {params: {id: id, password: password}}
    ).then(function (resp) {
      //console.log(resp.data);
      if (resp.data !== null && resp.data != "") {
        if(resp.data.errorCode == null) {
          console.log("로그인 성공");
          goMain();
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