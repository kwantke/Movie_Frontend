import {useState} from "react";
import RunMovieDetail from "../backend/movie/RunMovieDetail";
import MovieDetailMain from "../components/Detail/MovieDetailMain";
import Header from "../components/Common/Header";

interface IMovie {
  id: number
  img: string
  name: string
  type: string
}
interface PropTypes{
  location:{
    state: {
      movieId: any;
    }
  }
}
export default function Detail({location: {state:{movieId}}}:PropTypes
){
  console.log(movieId);
  const [runMovieDetailFlag, setRunMovieDetailFlag] = useState(true)

  return <>
    <Header/>
    <MovieDetailMain

    />
    {runMovieDetailFlag && <RunMovieDetail
      movieId = {movieId}
      />
    }
  </>
}