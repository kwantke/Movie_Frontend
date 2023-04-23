import {Link} from "react-router-dom";
import "./LoginMain.css";

interface propTypes {
  id: string
  password: string
  setId: (id: string) => void;
  setPassword: (password: string) => void;
  login: ()=> void;
  failMsg: string;
}

export function LoginMain({id, password, setId, setPassword, login, failMsg}: propTypes) {

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      login();
    }
  };
  return (
      <>
        <section className="join-form">
          <h1>MyMovie</h1>
          {failMsg !="" &&
            <div className="alert">{failMsg}</div>
          }
          <div className="id int-area">
            <input
                type="text"
                name="id"
                id="id"
                autoComplete="off"
                onChange={(e) => setId(e.target.value)}
                onKeyDown={handleKeyDown}
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
                onKeyDown={handleKeyDown}
                required/>
            <label htmlFor="pw">PASSWORD</label>
          </div>
          <div className="login btn-area" >
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