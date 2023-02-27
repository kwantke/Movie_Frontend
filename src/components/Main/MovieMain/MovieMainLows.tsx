import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper";
import "swiper/css";
export interface IMovie {
  id: number;
  img: string;
  name: string;
  type: string;
}

export interface IMovieSection {
  id: number;
  section: number;
  sectionName: string;
  movieDtoList: IMovie[];
}


export default function MovieMainLows({movieSectionList, goMovieDetail}: any){
//export const MovieMainLows = ({movieSectionList, goMovieDetail}: any) => {


  return (
      <>
        {
          movieSectionList.length > 1 ? movieSectionList.map((section: IMovieSection ) =>(
              <section className="popular container" key={section.id}>

                {/* Heading */}
                <div className="heading">
                  <h2 className="heading-title">{section.sectionName}</h2>
                </div>
                {/* Content */}

                <div className="popular-content swiper">
                  <Swiper
                      slidesPerView={2}
                      spaceBetween={10}
                      autoplay={{
                        delay: 755500,
                        disableOnInteraction: false,
                      }}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={true}
                      modules={[Autoplay, Pagination, Navigation]}
                      className="mySwiper"
                      breakpoints={{
                        // when window width is >= 640px
                        280: {
                          slidesPerView: 1,
                          spaceBetween: 10
                        },
                        320: {
                          slidesPerView: 2,
                          spaceBetween: 10
                        },
                        510: {
                          slidesPerView: 2,
                          spaceBetween: 10
                        },
                        758: {
                          slidesPerView: 3,
                          spaceBetween: 15
                        },
                        900: {
                          slidesPerView: 4,
                          spaceBetween: 20,
                        }
                      }}
                  >
                    {section.movieDtoList.length>1 ? section.movieDtoList.map((movie: IMovie )=>(
                        <SwiperSlide key={movie.id}>
                          <div className="movie-box">
                            <img src={movie.img} alt="" className="movie-box-img"/>
                            <div className="box-text">
                              <h2 className="movie-title">{movie.name}</h2>
                              <span className="movie-type">{movie.type}</span>
                              <a href="#none" className="watch-btn play-btn" onClick={()=>goMovieDetail(movie.id)}>
                                <i className='bx bx-right-arrow'></i>
                              </a>
                            </div>
                          </div>
                        </SwiperSlide>
                      )):""}

                  </Swiper>

                </div>
              </section>

          )):""

        }
      </>

  )
}