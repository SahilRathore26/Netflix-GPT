const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-52 pl-14 absolute text-white bg-gradient-to-b from-black w-full aspect-video z-10">
      <h1 className="text-6xl font-bold my-8">{title}</h1>
      <p className="w-2/6 py-2 text-lg">{overview}</p>
      <div className="my-5 ">
        <button className="bg-white text-black py-2 px-6 text-xl font-semibold rounded-lg hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="bg-neutral-600 bg-opacity-70 text-white py-2 px-8 text-xl font-semibold rounded-lg mx-2">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
