import {useEffect} from "react";
import axios from "axios";

interface PropTypes{
  id: string;
  password: string;
  email: string;
}

export default function RunJoin({id, password, email}:PropTypes){
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

        }
      } else {

      }
    })
  })
  return (
      <></>
  )
}