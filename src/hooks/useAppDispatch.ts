import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";
//useCartDispatch tipizza il generico useDispatch
type AppDispatchFn = () => AppDispatch;
const useAppDispatch: AppDispatchFn = () => useDispatch();
export default useAppDispatch;
