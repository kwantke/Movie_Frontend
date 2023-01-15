
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
          <h1>{inFromLogin}님 환영합니다.</h1>
      </>
  )

}