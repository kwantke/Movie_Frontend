import "./JoinMain.css"
import JoinFailedAlert from "./JoinFailedAlert";
import {useEffect, useState} from "react";

interface PropTypes {
  setId: (id: string) => void;
  setPassword: (password: string) => void;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  failMsg: string;
  setFailMsg: (failMsg: string) => void;
  setRunJoin: (runJoin: boolean) => void;
  join:() => void;
}

export default function JoinMain({
     setId
   , setPassword
   , setName
   , setEmail
   , failMsg
   , join
}: PropTypes)
{
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      join ();
    }
  };
  return (
      <>
        <section className="join-form">
          <h1>회원가입</h1>
          {failMsg != "" && <JoinFailedAlert failMsg={failMsg}/>}
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
            <label htmlFor="pwInJoinInput">비밀번호</label>
          </div>
          <div className="name int-area">
            <input
                type="text"
                name="name"
                id="nameInJoinInput"
                autoComplete="off"
                onChange={(e) => setName(e.target.value)}
                onKeyDown={handleKeyDown}
                required/>
            <label htmlFor="nameInJoinInput">이름</label>
          </div>
          <div className="email int-area">
            <input
                type="text"
                name="email"
                id="emailInJoinInput"
                autoComplete="off"
                onChange={(e)=> setEmail(e.target.value)}
                onKeyDown={handleKeyDown}
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