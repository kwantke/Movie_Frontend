import {Link} from "react-router-dom";
import {useEffect} from "react";

export default function MovieDetailMain(){

  let video: HTMLElement;
  let myvideo: HTMLVideoElement;
  useEffect(()=>{
    setTimeout(()=>{
      video = document.querySelector('.video-container') as HTMLElement;
      myvideo = document.querySelector('#myvideo') as HTMLVideoElement;
      // eslint-disable-next-line react-hooks/rules-of-hooks
      //myvideo = useRef<HTMLVideoElement>();
    })
  })
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
      <img src="/images/play-page/play-background.jpg" alt="" className="play-img"/>
      {/* Play Text */}
      <div className="play-text">
        <h2>name</h2>
        {/* Ratings */}
        <div className="rating">
          <i className='bx bxs-star'></i>
          <i className='bx bxs-star'></i>
          <i className='bx bxs-star'></i>
          <i className='bx bxs-star'></i>
          <i className='bx bxs-star-half'></i>
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
      <h2>Jumanji: Welcome to the Jungle</h2>
      <p>When four students play with a magical video game, they are drawn to the jungle, where they are trapped as their avatars. To return to the real world, they must finish the game.</p>
      {/* Movie Cast */}
      <h2 className="cast-heading">Movie Cast</h2>
      <div className="cast">
        <div className="cast-box">
          <img src="/images/play-page/cast1.jpg" alt="" className="cast-img" />
          <span className="cast-title">Dwayne Johnson</span>
        </div>
        <div className="cast-box">
          <img src="/images/play-page/cast2.jpg" alt="" className="cast-img" />
          <span className="cast-title">Karen Gillan</span>
        </div>
        <div className="cast-box">
          <img src="/images/play-page/cast3.jpg" alt="" className="cast-img" />
          <span className="cast-title">Kevin Hart</span>
        </div>
        <div className="cast-box">
          <img src="/images/play-page/cast4.jpg" alt="" className="cast-img" />
          <span className="cast-title">Jack Black</span>
        </div>
        <div className="cast-box">
          <img src="/images/play-page/cast5.jpg" alt="" className="cast-img" />
          <span className="cast-title">Nick Jonas</span>
        </div>
        <div className="cast-box">
          <img src="/images/play-page/cast6.jpg" alt="" className="cast-img" />
          <span className="cast-title">Madison Iseman</span>
        </div>
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