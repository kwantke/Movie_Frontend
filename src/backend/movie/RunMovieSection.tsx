import {useEffect} from "react";
import axios from "axios";
import {useAppSelector} from "../../module/redux/hooks";

export default function RunMovieSection({
      setMovieSectionList
    , setHasSectionFlag
    , setRunSectionFlag}
 : any){

  const joinUrl = process.env.REACT_APP_MOVIE_SECTION_LIST as string;
  const {token} = useAppSelector(state=>state.user);
  let config = {
    headers:{
        "x-auth-token": token
      , "Content-type": "charset=UTF-8"
    }
   , params:{
      useYn : "Y"
    }
  }
  useEffect(()=>{
    axios.get(joinUrl,config)
    .then(function(res) {
      if (res.data !== null && res.data != "") {
        if (res.data.errorCode == null) {
          console.log("섹션데이터 가져오기 성공")
          console.log(res);
          setMovieSectionList(res.data.data);
          setHasSectionFlag(true);
          setRunSectionFlag(false);

        }else{
          console.log("섹션데이터 가져오기 실패")
          setRunSectionFlag(false);
        }
      } else {

      }
    }).catch(function (err){
      console.log(`Error Message: ${err}`);

    })
  },[])
  return (
      <></>
  )
}