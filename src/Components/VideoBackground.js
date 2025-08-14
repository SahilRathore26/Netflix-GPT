import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store?.movies?.trailerVideo);
  useMovieTrailer(movieId);

  return (
    <div className="">
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/"+ trailerVideo?.key +"?&autoplay=1&mute=1&controls=0&enablejsapi=0&rel=0;modestbranding=1&showsearch=0&showinfo=0&loop=1&playsinline=1&fs=0"}
        title="YouTube video player"
        allow="autoplay; fullscreen; encrypted-media"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
