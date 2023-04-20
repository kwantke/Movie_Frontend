import "./Header.css";
import LogoAndSearchBoxAndUser from "./LogoAndSearchBoxAndUser";
import NavBar from "./NavBar";
import {useAppSelector} from "../../module/redux/hooks";
import {persistor} from "../../index";

interface propTypes{
  userId: string
}
export default function Header(){
  const {userId, img, isAuthenticated} = useAppSelector(state => state.user);

  const logout = async ()=>{
    console.log("logout");
    await persistor.purge();
    alert("로그아웃되었습니다.");
    window.location.replace("/");
  }
  return (
      <header>
        <div className="nav container">
          <LogoAndSearchBoxAndUser
            userId ={userId}
            img = {img}
            logout = {logout}
          />
          <NavBar/>
        </div>
      </header>
  )
}