import "./LogoAndSearchBoxAndUser.css"
interface propTypes{
  userId:string
  img:string
}
export default function LogoAndSearchBoxAndUser(
    {
      userId
      ,img
    }:propTypes
){
console.log(userId+" "+img);
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
        <img src={img} alt="" className="user-img"/>
      </a>
    </>
  )
}