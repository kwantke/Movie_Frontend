import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import MovieMain from "../components/Main/MovieMain";
import {useState} from "react";

interface PropTypes{
  location: {
    state: {
      inFromLogin: any;
    }
  }
}
/*export default function Main({
      location: {
        state: { inFromLogin },
      },
    } :any){*/
export default function Main(){

  const [successLogin, setSuccessLoing] = useState(true);
  //setSuccessLoing(true);

  return (
      <>
          {/*<h1>{inFromLogin}님 환영합니다.</h1>*/}
          <Header/>
          <MovieMain successLogin={successLogin}/>
          <Footer/>
      </>
  )

}