import { resetFavouriteData } from "@/store/nextSlice";
import { useDispatch } from "react-redux";

const ResetFavouriteItems = () => {
  const dispatch = useDispatch();
  const handleResetFavourite = () => {
    const confirmRest = window.confirm(
      "Are you sure to reset your items from the favourite?"
    );
    if (confirmRest) {
      dispatch(resetFavouriteData());
    }
  };

  return (
    <button
      onClick={handleResetFavourite}
      className="w-44 h-10 font-semibold bg-gray-200 rounded-lg hover:bg-red-600 hover:text-white duration-300"
    >
      Reset favourites
    </button>
  );
};

export default ResetFavouriteItems;
