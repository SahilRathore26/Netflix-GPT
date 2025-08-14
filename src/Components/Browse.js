import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { USER_AVATAR } from "../utils/constants";
import MainContainer from "./MainContainer";
import SecondryContainer from "./SecondryContainer";

const Browse = () => {
  useNowPlayingMovies();

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
    <div>
      <div className="flex justify-between relative">
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
      <div className="absolute top-0">
        <MainContainer />
        <SecondryContainer />
      </div>
    </div>
  );
};

export default Browse;
