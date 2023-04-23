import Header from "../Common/Header";
import {IMovie} from "../../routes/Main";
import {Link} from "react-router-dom";
import "./search.css"
interface PropTypes{
  searchMovieList: IMovie[]
}
export default function Search(searchMovieList:any){


  return <div className="search">
  <div className="container top">
    {searchMovieList.searchMovieList != null ? searchMovieList.searchMovieList.map((movie:IMovie)=>(
        <div className="search-movie-box"key={movie.id}>
        <div className="movie-box" >
          <img src={movie.img} alt="" className="movie-box-img"/>
          <div className="box-text">
            <h2 className="movie-title">{movie.name}</h2>
            <span className="movie-type">{movie.type}</span>
            {/* <a href={`/detail/${movie.id}`} className="watch-btn play-btn" onClick={()=>goMovieDetail(movie.id)}>
                                <i className='bx bx-right-arrow'></i>
                              </a>*/}
            <Link to={
              {pathname: `/detail/${movie.id}`,
                state:{
                  movieId: movie.id
                }
              }}  className="watch-btn play-btn">
              <i className='bx bx-right-arrow'></i>
            </Link>
          </div>
        </div>
        </div>
    )):""}
  </div>
  </div>
}