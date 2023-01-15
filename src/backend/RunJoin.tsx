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
                        , password: password
                        ,email: email
                        }
                }
        ).then(function(res) {
          console.log(res);
    })
  })
  return (
      <></>
  )
}