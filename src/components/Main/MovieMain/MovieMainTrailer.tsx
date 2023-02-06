//import "./MovieMainTrailer.css"
export default function MainMovieTrailer(){


  return (
      <section className="home container" id="home">
        {/* Home Image */}
        <img src="/images/img/home-background.png" alt="" className="home-img"/>
        {/* Home Text*/}
        <div className="home-text">
          <h1 className="home-title">Hitman's Wife's <br/>Bodyguard</h1>
          <p>Releasing 10 April</p>
          <a href="#" className="watch-btn">
            <i className='bx bx-right-arrow'></i>
            <span>Watch the trailer</span>
          </a>
        </div>
      </section>
  )
}