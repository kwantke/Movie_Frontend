import "./LogoAndSearchBoxAndUser.css"
import {useState} from "react";
import {propTypes} from "./Header";
import {useAppSelector} from "../../module/redux/hooks";


export default function LogoAndSearchBoxAndUser({
     logout
    ,setSearchData
}:propTypes){
  const {img} = useAppSelector(state => state.user);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) =>{
    if(e.key === 'Enter') {

    }
  }

  return (
    <>
      {/* Logo */}
      <a href="/main" className="logo">
        Ko<span>Moive</span>
      </a>
      {/* Search Box */}
      <div className='user-title logout' onClick={()=>logout()}>
        로그아웃
      </div>
      <div className="search-box">
        <input
            type="search"
            name=""
            id="search-input"
            autoComplete="off"
            placeholder="Search movie"
            onChange={(e)=> setSearchData(e.target.value)}
            onKeyDown={handleKeyDown}
        />
        <i className="bx bx-search"></i>
      </div>
      {/* User */}
      <a href="#" className="user">
        <img src={img} alt="" className="user-img"/>
      </a>
    </>
  )
}