import {useEffect, useState} from "react";
import {Redirect} from "react-router-dom";
import Loading from "../components/Login/Loading";
import LoginMain from "../components/Login/LoginMain";
import LoginFailAlert from "../components/Login/LoginFailAlert"
import RunLogin from "../backend/RunLogin";

export default function Login() {
  const [loading, setLoading] = useState(true); //로딩 페이지 보여주는 프래그
  // 사용자가 DB로 부터 가져온 ID
  //LoginMain, RunLogin 에 props 전달,
  // 현재 컴포넌트의 Login에서 할 일 끝나면, MAin 라우트로 props 전달
  //LoginMain 으로 setId를 보내서, 입력창에 사용자가 id를 변경시킬때마다 setId 실행
  const [id, setId] = useState("");
  //passwd: 사용자가 입력한 패스워드
  //LoginMain, RunLogin 에 props 전달
  //LoginMain 으로 setPasswd를 보내서, 입력창에 사용자가 passwd를 변경시킬때마다 setPasswd 실행
  const [password, setPassword] = useState("");
  // RunLogin 컴포넌트 플래그
  const [runLogin, setRunLogin] = useState(false); // 로그인 버튼 flag용
  // FailedAlert 컴포넌트 플래그
  const [failedAlarm ,setFailedAlarm] =  useState(false);
  // 현재 컴포넌트인 Login에서 로그인 성공시 /main으로 가기위한 리다이렉트 플래그
  const [goMainFlag, setGoMainFlag] = useState(false);
  //setFailedAlarm은 RunLogin 컴포넌트에서 컨트롤하는데,
  //만약 failedAlarm 플래그가 켜지면
  //useEffect가 바뀐것을 인지하여 1초 후에 끈다.
  useEffect(()=>{
    if(failedAlarm){
      setTimeout(() =>{
        setFailedAlarm(false);
      }, 1000);
    }
  })
  // clean-up
  //현재 컴포넌트인 Login을 떠나 Main으로 가기 전에
  //state를 사용하는 컴포넌트를 끄기 위해 존재
  useEffect (()=>{
    return () =>{
      setRunLogin(false);

    }
  })

  //LoginMain 컴포넌트에서 사용
  const login = () => {
    console.log("lgoin")
    setRunLogin(true);
  }
  // RunLogin에서 사용함
  const goMain = ()=>{
    console.log("로그인 성공goMain")
    setRunLogin(false);
    setGoMainFlag(true);
  }
  /*const offFailedAlarm = () => {
    setTimeout(() =>{
      setFailedAlarm(false);
    }, 1000);
  }*/
  setTimeout(() => {
    setLoading(false);
  }, 2000)

  return (
      <>
        {failedAlarm && <LoginFailAlert/>}
        {loading ? <Loading/> : <LoginMain
            password={password}
            id={id}
            setId={setId}
            setPassword={setPassword}
            login={login}
        />}
        {/*// RunLogin 컴포넌트는 실제 화면에 보이는것은 없으나,
         함수처럼 사용할 목적임.
         상세한 설명은 RunLogin 컴포넌트에서 확인*/}
        {runLogin && (<RunLogin
                              id={id}
                              password={password}
                              setRunLogin={setRunLogin}
                              setFailedAlarm={setFailedAlarm}
                              /*offFailedAlarm={offFailedAlarm}*/
                              goMain={goMain}
                      />
        )}
        {goMainFlag &&(
            <Redirect to={{
              pathname: "/main",
              state: {
                inFromLogin: id
              }
            }} />
        )}
  </>
  )

}