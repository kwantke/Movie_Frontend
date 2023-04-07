import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import {useState} from "react";
import RunMovieSection from "../backend/movie/RunMovieSection";
import MovieMain from "../components/Main/MovieMain";
import {Redirect} from "react-router-dom";
import {useAppSelector} from "../module/redux/hooks";
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


  const goMovieDetail =(id:string)=>{
    console.log("id="+id)
    setMovieId(id);
    setGoMovieDetailFlag(true);
  }

  const logout = async ()=>{
    console.log("로그아웃");
    window.location.reload();
    await persistor.purge();

  }
  return (
      <>

          {/*<h1>{inFromLogin}님 환영합니다.</h1>*/}
          <Header
            logout = {logout}
          />
          <MovieMain successLogin={successLogin}
                     movieSectionList={movieSectionList}
                     setMovieSectionList={setMovieSectionList}
                     hasSectionFlag={hasSectionFlag}
                     goMovieDetail={goMovieDetail}

          />
          <Footer/>
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