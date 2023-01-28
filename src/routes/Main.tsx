import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import MovieMain from "../components/Main/MovieMain";
interface PropTypes{
  location: {
    state: {
      inFromLogin: any;
    }
  }
}
export default function Main({
      location: {
        state: { inFromLogin },
      },
    } :any){

  return (
      <>
          {/*<h1>{inFromLogin}님 환영합니다.</h1>*/}
          <Header/>
          <MovieMain/>
          <Footer/>
      </>
  )

}