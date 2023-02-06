import "./Header.css";
import LogoAndSearchBoxAndUser from "./LogoAndSearchBoxAndUser";
import NavBar from "./NavBar";
export default function Header(){

  return (
      <header>
        <div className="nav container">
          <LogoAndSearchBoxAndUser/>
          <NavBar/>
        </div>
      </header>
  )
}