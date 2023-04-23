import {useEffect} from "react";
import axios from "axios";
import {useAppSelector} from "../../module/redux/hooks";

interface PropTypes{
  movieId: string
}
export default function RunMovieDetail({
      movieId
    , setMovieDetail
    , setHasMovieDetailFrag
}:any){

  const movieDetailUrl = process.env.REACT_APP_MOVIE_DETAIL as string;
  const {token} = useAppSelector(state=>state.user);
  let config = {
    headers:{"x-auth-token": token}
    ,params:{id: movieId}
  }
  useEffect(()=>{
    axios.get(movieDetailUrl,config)
    .then(function(res){
      if (res.data !== null && res.data != "") {
        if (res.data.errorCode == null) {

          setMovieDetail(res.data)
          setHasMovieDetailFrag(true)

        }else{

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