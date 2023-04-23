
import JoinMain from "../components/Join/JoinMain";
import {useEffect, useState} from "react";
import RunJoin from "../backend/RunJoin";
import {Redirect} from "react-router-dom";
export default function Join(){
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [runJoin, setRunJoin] = useState(false);
    const [goLoginFlag, setGoLoginFlag] = useState(false);
    const [failMsg,setFailMsg] = useState("");

    useEffect(()=>{
        if(failMsg != ""){
            setTimeout(() =>{
                setFailMsg("");
            }, 2000);
        }
    })
    const join = ()=>{
        if(id.trim() == ""){
            setFailMsg("아이디를 입력해주세요.");
            return false;
        } else if(password.trim() == ""){
            setFailMsg("비밀번호를 입력해주세요");
            return false;
        } else if(email.trim() == ""){
            setFailMsg("이메일을 입력해주세요");
            return false;
        }
        setRunJoin(true);
    }
    const goLogin = ()=> {
        alert("회원가입이 되었습니다. \n로그인후 이용해주세요.");
        setRunJoin(false);
        setGoLoginFlag(true);
    }
    return (
      <>
        <JoinMain
            setId={setId}
            setPassword={setPassword}
            setName={setName}
            setEmail={setEmail}
            failMsg={failMsg}
            setFailMsg={setFailMsg}
            setRunJoin = {setRunJoin}
            join={join}
        />
          {runJoin && (<RunJoin id={id}
                                password={password}
                                name={name}
                                email={email}
                                setRunJoin={setRunJoin}
                                setFailMsg={setFailMsg}
                                goLogin={goLogin}
          />)}
          {goLoginFlag &&(
              <Redirect to={{
                  pathname:"/"
              }}/>
          )

          }
      </>
    )

}