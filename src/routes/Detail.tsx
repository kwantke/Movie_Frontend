import {useEffect, useState} from "react";
import RunMovieDetail from "../backend/movie/RunMovieDetail";
import MovieDetailMain from "../components/Detail/MovieDetailMain";
import Header from "../components/Common/Header";
import {useParams} from "react-router-dom";

interface IMovie {
  id: number
  img: string
  name: string
  type: string
}
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

export default function Detail(){
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

    <MovieDetailMain

    />
    {runMovieDetailFlag && <RunMovieDetail
      movieId ={data.id}
      />
    }
  </>
}