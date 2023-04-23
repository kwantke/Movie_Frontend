import {useEffect} from "react";
import axios from "axios";
import {useAppSelector} from "../../module/redux/hooks";

export default function RunMovieSearch({
     searchData
    ,setSearchMovieList
    ,setRunSearchFlag
}:any) {
  const searchUrl = process.env.REACT_APP_MOVIE_SEARCH as string;
  const {token} = useAppSelector(state=>state.user);

  let config ={
    headers:{
      "x-auth-token": token
      ,"Content-type": "charset=UTF-8"
    }
    , params:{
      searchData: searchData
    }
  }
  useEffect(()=>{
    axios.get(searchUrl,config)
        .then(function(res) {
          if(res.data !== null && res.data !==""){
            if(res.data.errorCode == null){
              setSearchMovieList(res.data)
              setRunSearchFlag(false)
            }
          }
        })
  },[])
  return (
      <></>
  )
}