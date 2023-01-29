import "./JoinFailedAlert.css"

interface PropTypes {
  failMessage: string;
}
export default function JoinFailedAlert({
    failMessage

  }:PropTypes){


  return(
      <>
        <div className="faliedJoin alert">

          {failMessage}
        </div>

      </>
  )
}