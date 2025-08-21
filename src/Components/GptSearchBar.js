import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-28 flex justify-center">
      <form className="w-1/3">
        <input className="w-3/4 p-2 px-4 m-2 h-10 border-none rounded-3xl text-sm" type="text" placeholder={lang[langKey].gptSearchPlaceHolder}></input>
        <button className="m-2 p-2 px-6 h-10 bg-red-700 text-sm text-white ml-2 rounded-3xl">{lang[langKey].search}</button>
      </form>
    </div>
  );
};

export default GptSearchBar;