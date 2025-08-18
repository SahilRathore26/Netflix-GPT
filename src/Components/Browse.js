import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { USER_AVATAR } from "../utils/constants";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();

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
    <div className="relative">
      <div className="absolute w-full flex justify-between z-20">
        <div>
          <Header logoSize="w-32" marginClass="mx-4" paddingClass="p-2" />
        </div>
        <div className="mx-2  p-2 flex z-10">
          <img
            className="w-10 h-10 m-2 rounded-lg"
            src={USER_AVATAR}
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
      <div className="relative bg-neutral-900">
        <MainContainer />
        <SecondaryContainer />
      </div>
    </div>
  );
};

export default Browse;
