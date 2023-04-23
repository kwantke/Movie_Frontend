import "./Header.css";
import LogoAndSearchBoxAndUser from "./LogoAndSearchBoxAndUser";
import NavBar from "./NavBar";
import {useAppSelector} from "../../module/redux/hooks";
import {persistor} from "../../index";
import {useState} from "react";
import RunMovieSearch from "../../backend/movie/RunMovieSearch";
import {useHistory} from "react-router-dom";

export interface propTypes{
  logout:()=> void;
  setSearchData: (searchData: string) => void;
}

export default function Header({logout
                                ,setSearchData
                               }:propTypes){



 /* const search = () => {
    if (searchData == "") {
      return false;
    }
  }*/
  return (
      <header>
        <div className="nav container">
          <LogoAndSearchBoxAndUser
              logout={logout}
            setSearchData={setSearchData}
          />
          <NavBar/>
        </div>
      </header>
  )
}