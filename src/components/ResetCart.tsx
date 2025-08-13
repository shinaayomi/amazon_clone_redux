import { resetCart } from "@/store/nextSlice";
import { useDispatch } from "react-redux";

const ResetCart = () => {
  const dispatch = useDispatch();
  const handleResetCart = () => {
    const confirmRest = window.confirm(
      "Are you sure to reset your items from the cart?"
    );
    if (confirmRest) {
      dispatch(resetCart());
    }
  };

  return (
    <button
      onClick={handleResetCart}
      className="w-44 h-10 font-semibold bg-gray-200 rounded-lg hover:bg-red-600 hover:text-white duration-300"
    >
      Reset cart
    </button>
  );
};

export default ResetCart;
