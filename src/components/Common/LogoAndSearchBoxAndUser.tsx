import "./LogoAndSearchBoxAndUser.css"
interface propTypes{
  userId:string
  img:string
  logout: () => void
}
export default function LogoAndSearchBoxAndUser({
     img
    ,logout
}:propTypes){
  return (
    <>
      {/* Logo */}
      <a href="/" className="logo">
        Movie<span>Vel</span>
      </a>
      {/* Search Box */}
      <div className='user-title logout' onClick={()=>logout()}>
        로그아웃
      </div>
      <div className="search-box">
        <input type="search" name="" id="search-input" placeholder="Search movie"/>
        <i className="bx bx-search"></i>
      </div>
      {/* User */}
      <a href="#" className="user">
        <img src={img} alt="" className="user-img"/>
      </a>
    </>
  )
}