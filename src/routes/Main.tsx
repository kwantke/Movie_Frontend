import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import {useEffect, useState} from "react";
import RunMovieSection from "../backend/movie/RunMovieSection";
import MovieMain from "../components/Main/MovieMain";
import {Redirect} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../module/redux/hooks";
import {persistor} from "../index";

interface PropTypes{
  location: {
    state: {
      inFromLogin: any;
    }
  }
}

export interface IMovieSection{
  id: number;
  section: number;
  sectionName: string;

}
export default function Main(){
/*export default function Main({
                               location: {
                                 state: { inFromLogin },
                               },
                             } :any){*/
//  console.log("inFromLogin : "+inFromLogin)
  const [successLogin, setSuccessLoing] = useState(true);
  //setSuccessLoing(true);
  const [movieSectionList,setMovieSectionList] = useState<IMovieSection[]>();
  const [runSectionFlag, setRunSectionFlag] = useState(true);
  const [hasSectionFlag, setHasSectionFlag] = useState(false);
  const [goMovieDetailFlag, setGoMovieDetailFlag] = useState(false);
  const [movieId, setMovieId] = useState("");

  const {isAuthenticated} = useAppSelector(state=>state.user);

  const goMovieDetail =(id:string)=>{
    setMovieId(id);
    setGoMovieDetailFlag(true);
  }

  return (
      <>

        {isAuthenticated ?
          <>
          <Header/>
          <MovieMain successLogin={successLogin}
                     movieSectionList={movieSectionList}
                     setMovieSectionList={setMovieSectionList}
                     hasSectionFlag={hasSectionFlag}
                     goMovieDetail={goMovieDetail}

          />
          <Footer/>
          </> : (<Redirect to={{
                pathname:"/"
            }}/>)}


        {runSectionFlag && (<RunMovieSection
            setMovieSectionList={setMovieSectionList}
            setHasSectionFlag={setHasSectionFlag}
            setRunSectionFlag={setRunSectionFlag}/>)

        }
        {goMovieDetailFlag && (
            <Redirect to={{
              pathname: "/detail",
              state: {
                movieId: movieId
              }
            }}/>
        )}
      </>
  )

}