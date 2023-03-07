
interface IMovie{
  movieId: string
}
export default function RunMovieDetail({movieId}:IMovie){
  console.log("movieId="+ movieId)
  return <></>
}