import {useEffect, useState} from "react";
import RunMovieDetail from "../backend/movie/RunMovieDetail";
import MovieDetailMain from "../components/Detail/MovieDetailMain";
import Header from "../components/Common/Header";
import {useParams} from "react-router-dom";

import internal from "stream";
import {logout} from "../module/common";

interface ParamTypes{
  id: string
}
export interface IMovie{
  id: bigint;
  img: string;
  name: string;
  type: string;
  score: string;
  star?: string;
  section: number;
  bgImg: string;
  video?: string;
  detail: string;

}



export default function Detail(){


  const [movieDetail, setMovieDetail] = useState<IMovie>()
  const [hasMovieDetailFrag, setHasMovieDetailFrag] = useState(false);
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  let data = useParams<ParamTypes>();

  const [runMovieDetailFlag, setRunMovieDetailFlag] = useState(true)

  return <>
    {runMovieDetailFlag && <RunMovieDetail
      movieId ={data.id}
      setMovieDetail = {setMovieDetail}
      setHasMovieDetailFrag = {setHasMovieDetailFrag}
    />
    }

    {
      hasMovieDetailFrag && <MovieDetailMain
        movie = {movieDetail}
    />
    }

  </>
}