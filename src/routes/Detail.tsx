import {useEffect, useState} from "react";
import RunMovieDetail from "../backend/movie/RunMovieDetail";
import MovieDetailMain from "../components/Detail/MovieDetailMain";
import Header from "../components/Common/Header";
import {useParams} from "react-router-dom";
import internal from "stream";

/*interface IMovie {
  id: bigint
  img: string
  name: string
  type: string
}*/
/*interface PropTypes{
  location:{
    state: {
      movieId: any;
    }
  }
}*/
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

  // @ts-ignore
  const [movieDetail, setMovieDetail] = useState<IMovie>(null)
  const [hasMovieDetailFrag, setHasMovieDetailFrag] = useState(false);

  console.log("dddss = "+movieDetail?.star);
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  let data = useParams<ParamTypes>();
  //const [movieId, setMovieId] = useState("");
  //setMovieId(data.id);
  console.log("id = "+ data.id);
  const [runMovieDetailFlag, setRunMovieDetailFlag] = useState(true)

  return <>
    {runMovieDetailFlag && <RunMovieDetail
      movieId ={data.id}
      setMovieDetail = {setMovieDetail}
      setHasMovieDetailFrag = {setHasMovieDetailFrag}
    />
    }
    {
        hasMovieDetailFrag && <Header/>
    }

    {
      hasMovieDetailFrag && <MovieDetailMain
        movie = {movieDetail}
    />
    }

  </>
}