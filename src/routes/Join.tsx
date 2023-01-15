
import JoinMain from "../components/Join/JoinMain";
import {useState} from "react";
import RunJoin from "../backend/RunJoin";
export default function Join(){
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [failedAlarmOn, setFailedAlarmOn] = useState(false);
    const [runJoin, setRunJoin] = useState(false);
    // 실패했을 경우에 알람은 1초간 켜졌다가 까진다.
    /*const failedAlarm = ()=>{
        console.log("회원가입 실패")
        setFailedAlaramOn(true);
    }*/
    return (
      <>
        <JoinMain
            id={id}
            setId={setId}
            password={password}
            setPassword={setPassword}
            email={email}
            setEmail={setEmail}
            failedAlarmOn = {failedAlarmOn}
            setFailedAlarmOn = {setFailedAlarmOn}
            setRunJoin = {setRunJoin}
        />
          {runJoin && (<RunJoin id={id} password={password} email={email} />)}
      </>
    )

}