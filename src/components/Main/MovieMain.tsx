import MainMovieTrailer from "./MovieMain/MovieMainTrailer";
import MovieMainLows from "./MovieMain/MovieMainLows";
import "./MovieMain.css";
import {useState} from "react";
import RunMovieSection from "../../backend/movie/RunMovieSection";


export default function MovieMain(
    {successLogin
    , movieSectionList
    ,hasSectionFlag
    ,goMovieDetail
}:any){

  return (
   <>
     {successLogin &&(
         <>
           <MainMovieTrailer/>
           {hasSectionFlag && <MovieMainLows movieSectionList={movieSectionList}
                                              goMovieDetail={goMovieDetail}/>}


         </>
       )}

   </>
  )
}