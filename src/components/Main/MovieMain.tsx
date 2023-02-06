import MainMovieTrailer from "./MovieMain/MovieMainTrailer";
import {MovieMainLows} from "./MovieMain/MovieMainLows";
import "./MovieMain.css";
import {useState} from "react";
import RunMovieSection from "../../backend/movie/RunMovieSection";

export interface IMovie {
  id: number;
  img: string;
  name: string;
  type: string;
}
export interface IMovieSection{
  id: number;
  section: number;
  sectionName: string;

}
export interface PropTypes{
  successLogin: boolean
}
export default function MovieMain({successLogin}:PropTypes){

  const [movieList,setMovieList] = useState<IMovie[]>();
  const [movieSectionList,setMovieSectionList] = useState<IMovieSection[]>();
  const [runSectionFlag, setRunSectionFlag] = useState(true);
  const [hasSectionFlag, setHasSectionFlag] = useState(false);
  return (
   <>
     {successLogin &&(
         <>
           <MainMovieTrailer/>
           {hasSectionFlag && <MovieMainLows movieSectionList={movieSectionList}/>}
           {runSectionFlag && (<RunMovieSection
               setMovieSectionList={setMovieSectionList}
               setHasSectionFlag={setHasSectionFlag}/>)

           }

         </>
       )}

   </>
  )
}