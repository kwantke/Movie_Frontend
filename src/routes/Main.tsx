import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import {useEffect, useState} from "react";
import RunMovieSection from "../backend/movie/RunMovieSection";
import MovieMain from "../components/Main/MovieMain";
import {Redirect} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../module/redux/hooks";
import {persistor} from "../index";
import Search from "../components/Main/Search";
import RunMovieSearch from "../backend/movie/RunMovieSearch";
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
  movieDtoList: IMovie[];
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
  const [searchData, setSearchData] = useState("");
  const {userId, img, isAuthenticated} = useAppSelector(state => state.user);
  const [searchFlag, setSearchFlag] = useState(false);
  const [runSearchFlag, setRunSearchFlag] = useState(false);
  const [searchMovieList, setSearchMovieList] = useState<IMovie[]>();
  useEffect(()=>{

    if(searchData != ""){
      setSearchFlag(true)
      setRunSearchFlag(true);
    } else{
      setSearchFlag(false)
      setRunSearchFlag(false);
    }
    //
  },[searchData])

  const goMovieDetail =(id:string)=>{
    setMovieId(id);
    setGoMovieDetailFlag(true);
  }
  const logout = async ()=>{

    await persistor.purge();
    alert("로그아웃되었습니다.");
    window.location.replace("/");
  }

  return (
      <>
        {isAuthenticated ? "" : (<Redirect to={{
          pathname:"/"
        }}/>)}
        <Header
                logout={logout}
                setSearchData = {setSearchData}
        />

        {!searchFlag ? <MovieMain successLogin={successLogin}
                                  movieSectionList={movieSectionList}
                                  setMovieSectionList={setMovieSectionList}
                                  hasSectionFlag={hasSectionFlag}
                                  goMovieDetail={goMovieDetail}

        />:<Search searchMovieList={searchMovieList}/>}
        <Footer/>
        {runSectionFlag && (<RunMovieSection
            setMovieSectionList={setMovieSectionList}
            setHasSectionFlag={setHasSectionFlag}
            setRunSectionFlag={setRunSectionFlag}/>)

        }
        {runSearchFlag && (<RunMovieSearch
            searchData={searchData}
            setSearchMovieList={setSearchMovieList}
            setRunSearchFlag={setRunSearchFlag}/>)}
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