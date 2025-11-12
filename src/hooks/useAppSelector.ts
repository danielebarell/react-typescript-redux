import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { CartRootState } from "../store/store";
const useAppSelector: TypedUseSelectorHook<CartRootState> = useSelector;
export default useAppSelector;
