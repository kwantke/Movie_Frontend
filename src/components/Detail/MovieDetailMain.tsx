import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {IMovie} from "../../routes/Detail";
interface PropTypes{
 movieDetail: string;
}
interface IActor{
  idx: number
  movieId: bigint
  actorName: string
  actorImg: string

}
export default function MovieDetailMain({movie}:any){

  let video: HTMLElement;
  let myvideo: HTMLVideoElement;
  console.log("dddssaaaaaaa = "+movie.id);
  function starCall(){
    var array = [];
    for (var i = 0; i < movie.star; i++) {
      array.push(<i className='bx bxs-star'></i>);
    }
    return array;
  }

  useEffect(() => {
    setTimeout(() => {
      video = document.querySelector('.video-container') as HTMLElement;
      myvideo = document.querySelector('#myvideo') as HTMLVideoElement;
    })

  });
  const playButton = () =>{
    video.classList.add("show-video");

    /* Auto play When Clck On Button*/
    // myvideo.play();
    myvideo.play();
  }
  const closeButton = () =>{
    video.classList.remove("show-video");
    /* Pause On Close Video */
    myvideo.pause();

  }
  return <>
    <div className="play-container container">
      {/* Play Image */}
      <img src={movie.img} alt="" className="play-img"/>
      {/* Play Text */}
      <div className="play-text">
        <h2>{movie.name}</h2>
        {/* Ratings */}
        <div className="rating">
          {
            starCall()
          }
         {/* <i className='bx bxs-star'></i>
          <i className='bx bxs-star'></i>
          <i className='bx bxs-star'></i>
          <i className='bx bxs-star'></i>
          <i className='bx bxs-star-half'></i>*/}
        </div>
        {/* Tags */}
        <div className="tags">
          <span>Action</span>
          <span>Adventure</span>
          <span>4K</span>
        </div>
        {/* Trailer Button */}
        <Link to={`/play/`} className="watch-btn">
          <i className='bx bx-right-arrow'></i>
          <span>Watch the trailer</span>
        </Link>
      </div>
      {/* Play Btn */}
      <i className='bx bx-right-arrow play-movie' onClick={() => playButton()}></i>
      {/* Video container */}
      <div className="video-container">
        {/* Video Box*/}
        <div className="video-box">
          <video id="myvideo" src="/images/play-page/Jumanji.mp4" controls></video>
          {/* Close Video Icon */}
          <i className='bx bx-x close-video' onClick={()=> closeButton()}></i>
        </div>
      </div>
    </div>
    <div className="about-movie container">
      <h2>{movie.name}</h2>
      <p>{movie.detail}</p>
      {/* Movie Cast */}
      <h2 className="cast-heading">Movie Cast</h2>
      <div className="cast">
        {
          movie.actorDtoList.length >1 ? movie.actorDtoList.map((actor:IActor)=>(
              <div className="cast-box" key={actor.idx}>
                <img src={actor.actorImg} alt="" className="cast-img" />
                <span className="cast-title">{actor.actorName}</span>
              </div>
          )): "등록되어 있는 배우가 없습니다."
        }

      </div>
    </div>
    <div className="download">
      <h2 className="download-title">Download Movie</h2>
      <div className="download-links">
        <a href="/images/play-page/Jumanji.mp4" download>480p</a>
        <a href="/images/play-page/Jumanji.mp4" download>720p</a>
        <a href="/images/play-page/Jumanji.mp4" download>1080p</a>
      </div>
    </div>
  </>
}