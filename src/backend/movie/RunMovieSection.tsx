import {useEffect} from "react";
import axios from "axios";

export interface IMovieSection{
  id: number;
  section: number;
  sectionName: string;

}
type listProp<IMovieSection> ={
  setMovieSectionList: (flag: IMovieSection)=> void;
  setHasSectionFlag: (flag: boolean) => void;
}



export default function RunMovieSection(
    {setMovieSectionList
      , setHasSectionFlag
      , setRunSectionFlag}: any){

  const joinUrl = process.env.REACT_APP_MOVIE_SECTION_LIST as string;
  useEffect(()=>{
    axios.post(joinUrl
        ,null
        , {params:{useYn: 'Y'

          }
        }
    ).then(function(res) {
      if (res.data !== null && res.data != "") {
        if (res.data.errorCode == null) {
          console.log("섹션데이터 가져오기 성공")
          console.log(res);
          setMovieSectionList(res.data);
          setHasSectionFlag(true);
          setRunSectionFlag(false);

        }else{
          console.log("섹션데이터 가져오기 실패")
          setRunSectionFlag(false);
        }
      } else {

      }
    }).catch(function (err){
      console.log(`Error Message: ${err}`);

    })
  },[])
  return (
      <></>
  )
}