import {useEffect} from "react";
import axios from "axios";

interface PropTypes{
  id: string;
  password: string;
}
export function RunLogin({id, password}:PropTypes){

  const loginUrl = process.env.REACT_APP_MAIN_LOGIN as string;


  useEffect(() => {
    axios.post(loginUrl,
        null,
        {params: {id: id, password: password}}
    ).then(function (resp) {
      console.log(resp.data);
      if (resp.data !== null && resp.data != "") {
        console.log("로그인 성공");
      } else {
        console.log("로그인 실패");
      }
    }).catch(function (err) {
      console.log(`Error Message: ${err}`);
    })

  },[id])

  return (
      <></>
  )
}