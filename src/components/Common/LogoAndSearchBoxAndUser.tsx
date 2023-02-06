import "./LogoAndSearchBoxAndUser.css"
export default function LogoAndSearchBoxAndUser(){


  return (
    <>
      {/* Logo */}
      <a href="/" className="logo">
        Movie<span>Vel</span>
      </a>
      {/* Search Box */}
      <div className="search-box">
        <input type="search" name="" id="search-input" placeholder="Search movie"/>
        <i className="bx bx-search"></i>
      </div>
      {/* User */}
      <a href="#" className="user">
        <img src="/images/img/user.jpg" alt="" className="user-img"/>
      </a>
    </>
  )
}