import "./JoinMain.css"
import JoinFailedAlert from "./JoinFailedAlert";
import {useEffect, useState} from "react";

interface PropTypes {
  id: string,
  password: string;
  email: string;
  setId: (id: string) => void;
  setPassword: (password: string) => void;
  setEmail: (email: string) => void;
  failedAlarmOn: boolean;
  setFailedAlarmOn: (failedAlarm: boolean) => void;
  setRunJoin: (runJoin: boolean) => void;
}

export default function JoinMain({
   id
   , setId
   , password
   , setPassword
   , email
   , setEmail
   , failedAlarmOn
   , setFailedAlarmOn
   , setRunJoin
}: PropTypes) {

  useEffect(()=>{
    if(failedAlarmOn){
      setTimeout(() =>{
        setFailedAlarmOn(false);
      }, 5000);
    }
  })
  const setUser = () =>{

  }

  const join = ()=>{
    if(id !== "" && password !==""){
      setRunJoin(true);
    }else {
      setFailedAlarmOn(true);
    }
  }
  return (
      <>
        <section className="join-form">
          <h1>회원가입</h1>
          {failedAlarmOn && <JoinFailedAlert/>}
          <div className="id int-area">
            <input
                type="text"
                name="id"
                id="idInJoinInput"
                autoComplete="off"
                onChange={(e) => setId(e.target.value)}
                required/>
            <label htmlFor="idInJoinInput">아이디</label>
          </div>
          <div className="pw int-area">
            <input
                type="password"
                name="pw"
                id="pwInJoinInput"
                autoComplete="off"
                onChange={(e) => setPassword(e.target.value)}
                required/>
            <label htmlFor="pw">비밀번호</label>
          </div>
          <div className="email int-area">
            <input
                type="text"
                name="email"
                id="emailInJoinInput"
                autoComplete="off"
                onChange={(e)=> setEmail(e.target.value)}
                required/>
            <label htmlFor="emailInJoinInput">이메일</label>
          </div>
          <div className="login btn-area">
            <button onClick={join}>회원가입</button>
          </div>
        </section>

      </>
  )
}