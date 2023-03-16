import {useEffect} from "react";
import axios from "axios";

interface PropTypes{
  movieId: string
}
export default function RunMovieDetail(
    {
      movieId
      , setMovieDetail
      , setHasMovieDetailFrag
    }:any){
  console.log("movieId="+ movieId)
  const movieDetailUrl = process.env.REACT_APP_MOVIE_DETAIL as string;
  useEffect(()=>{
    axios.get(movieDetailUrl,{
      params:{
        id:movieId
      }
    })
    .then(function(res){
      if (res.data !== null && res.data != "") {
        if (res.data.errorCode == null) {
          console.log("상세 영화정보 가져오기 성공")
          console.log(res);
          setMovieDetail(res.data)
          setHasMovieDetailFrag(true)

          console.log("test");
        }else{
          console.log(" 가져오기 실패")

        }
      } else {

      }

    })
    .catch(function(error){
      console.log(error)
    })
    .finally(function(){

    })
  },[])
  return <></>

}