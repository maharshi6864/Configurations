import { privacyActions } from "../store/privacy.js";
import { counterActions } from "../store/counter.js"
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


const Controls = () => {

  // this is basically a hook to dispatch the reducer method of a slice of a store.
  const dispatch = useDispatch();
  const number = useRef();


  // this is how to use the slice in the store.
  // const {counterVal} = useSelector((store) => store.counter);
  //   const privacy = useSelector((store) => store.privacy);

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  }

  const handleAddition = () => {
    dispatch(counterActions.addition({ number: number.current.value }));
  }

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  }

  const handleSubtraction = () => {
    dispatch(counterActions.subtraction({ number: number.current.value }));
  }

  const handlePrivacy = () => {
    dispatch(privacyActions.togglePrivacy());
  }
  return <div className={`my-3 text-center`}>
    <input type="text" name="" className={`form-control`} ref={number} id="" />
    <div className={`my-3 text-center`}>
      <div className={`my-2`}>
        <button className={`btn btn-primary mx-2`} onClick={handleIncrement}>+1</button>
        <button className={`btn btn-primary mx-2`} onClick={handleDecrement}>-1</button>
      </div>
      <div className={`my-2`}>
        <button className={`btn btn-primary mx-2`} onClick={handleAddition}>Addition</button>
        <button className={`btn btn-primary mx-2`} onClick={handleSubtraction}>Subtraction</button>
      </div>
      <button className={`btn btn-warning`} onClick={handlePrivacy}>Privacy</button>
    </div>
  </div>
}

export default Controls;