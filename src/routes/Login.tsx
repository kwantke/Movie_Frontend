import {useState} from "react";
import Loading from "../components/Login/Loading";
import LoginMain from "../components/Login/LoginMain";
import {RunLogin} from "../backend/RunLogin";

export default function Login() {
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [runLogin, setRunLogin] = useState(false); // flag용
  const login = () => {
    setRunLogin(true);
  }
  setTimeout(() => {
    setLoading(false);
  }, 2000)
  return (
      <>
        {loading ? <Loading/> : <LoginMain
            password={password}
            id={id}
            setId={setId}
            setPassword={setPassword}
            login={login}
        />}
        {runLogin ? <RunLogin id={id} password={password}/> : <></>}
      </>
  )

}