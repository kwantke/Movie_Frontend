import {useEffect} from "react";
import axios from "axios";

interface PropTypes{
  id: string;
  password: string;
  name: string;
  email: string;
  setRunJoin: (flag: boolean) => void;
  setFailMsg: (failMsg: string) => void;
  goLogin: () => void;
}

export default function RunJoin({
      id
    , password
    , name
    , email
    , setRunJoin
    , setFailMsg
    , goLogin
}:PropTypes){


  const joinUrl = process.env.REACT_APP_MAIN_JOIN as string;
  let data ={
     id: id
    , password: password
    , name: name
    , email: email
    , role: "MM"
  }
  useEffect(()=>{
    axios.post(joinUrl
        ,JSON.stringify(data)
        ,{
           headers: {
             "Content-Type": `application/json`,
            }
        }
   ).then(function(res) {
        if (res.data !== null && res.data != "") {
          if (res.data.errorCode == null) {
            goLogin();
          }else{
            setFailMsg(res.data.errorMessage);
            setRunJoin(false);
          }
        } else {
          setFailMsg(res.data.errorMessage);
          setRunJoin(false);
        }

    }).catch(function (err){
      console.log(`Error Message: ${err}`);
      setRunJoin(false);
    })
  })
  return (
      <></>
  )
}