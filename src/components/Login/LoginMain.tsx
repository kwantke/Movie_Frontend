import {Link} from "react-router-dom";
import "./LoginMain.css";
import {useState} from "react";

interface propTypes {
  id: string;
  password: string;
  setId: (id: string) => void;
  setPassword: (password: string) => void;
  login: ()=> void;
}

export function LoginMain({id, password, setId, setPassword, login}: propTypes) {

  return (
      <>
        <section className="join-form">
          <h1>LOGO DESIGN</h1>
          <div className="id int-area">
            <input
                type="text"
                name="id"
                id="id"
                autoComplete="off"
                onChange={(e) => setId(e.target.value)}
                required/>
            <label htmlFor="id">USER NAME</label>
          </div>
          <div className="pw int-area">
            <input
                type="password"
                name="pw"
                id="pw"
                autoComplete="off"
                onChange={(e) => setPassword(e.target.value)}
                required/>
            <label htmlFor="pw">PASSWORD</label>
          </div>
          <div className="login btn-area">
            <button onClick={login}>LOGIN</button>
          </div>
          <div className="caption">
            <Link to="">Forgot Password?</Link>
            <Link to="/join">회원가입</Link>
          </div>
        </section>

      </>
  )

}