import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import Header from "./Header";
import { API_OPTIONS, USER_AVATAR } from "../utils/constants";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const Browse = () => {

  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
    const json = await data.json();

    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
  
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        //onAuthStateChanged handle this
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="flex justify-between">
      <div>
        <Header logoSize="w-32" marginClass="mx-4" paddingClass="p-2" />
      </div>
      <div className="mx-2  p-2 flex z-10">
        <img
          className="w-10 h-10 m-2"
          src= {USER_AVATAR}
          alt="profile-logo"
        ></img>
        <button
          className="my-2 p-2 bg-red-700 text-sm font-bold text-white rounded-lg "
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Browse;
