import "./JoinFailedAlert.css"

interface PropTypes {
  failMsg: string;
}
export default function JoinFailedAlert({
                                          failMsg
  }:PropTypes){
  return(
      <>
        <div className="faliedJoin alert">
          {failMsg}
        </div>

      </>
  )
}