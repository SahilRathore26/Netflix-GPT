const VideoTitle = ({title, overview}) => {
  return (
    <div className="pt-52 p-14 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-6xl font-bold my-8">{title}</h1>
      <p className="w-2/6 text-lg">{overview}</p>
      <div className="my-5">
        <button className="bg-white text-black py-3 px-8 text-xl font-semibold rounded-lg hover:bg-opacity-80">▶ Play</button>
        <button className="bg-neutral-600 bg-opacity-70 text-white py-3 px-10 text-xl font-semibold rounded-lg ml-2">ℹ More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;