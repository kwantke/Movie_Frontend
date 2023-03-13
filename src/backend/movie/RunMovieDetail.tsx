import {useEffect} from "react";
import axios from "axios";

interface IMovie{
  movieId: string
}
export default function RunMovieDetail({movieId}:IMovie){
  console.log("movieId="+ movieId)
  const movieDetailUrl = process.env.REACT_APP_MOVIE_DETAIL as string;
  useEffect(()=>{
    axios.get(movieDetailUrl,{
      params:{
        id:movieId
      }
    })
    .then(function(res){
      console.log(res);
    })
    .catch(function(error){
      console.log(error)
    })
    .finally(function(){

    });
  })
  return <></>

}