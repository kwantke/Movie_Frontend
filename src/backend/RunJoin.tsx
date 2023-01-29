import {useEffect} from "react";
import axios from "axios";

interface PropTypes{
  id: string;
  password: string;
  email: string;
  setRunJoin: (flag: boolean) => void;
  setFailMessage: (failMessage: string) => void;
  setFailedAlarmOn: (flag: boolean) => void;
}

export default function RunJoin({
      id
    , password
    , email
    , setRunJoin
    , setFailMessage
    , setFailedAlarmOn
}:PropTypes){
  console.log(id, password, email);

  const joinUrl = process.env.REACT_APP_MAIN_JOIN as string;
  useEffect(()=>{
    axios.post(joinUrl
        ,null
        , {params:{id: id
                        , name: "김철순"
                        , password: password
                        ,email: email
                        }
                }
        ).then(function(res) {
      if (res.data !== null && res.data != "") {
        if (res.data.errorCode == null) {
          console.log("로그인 성공")
          console.log(res);
        }else{
          console.log("회원가입 실패");
          setFailMessage(res.data.errorMessage);
          setRunJoin(false);
          setFailedAlarmOn(true);
        }
      } else {
        setFailMessage(res.data.errorCode);
        setRunJoin(false);
        setFailedAlarmOn(true);
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