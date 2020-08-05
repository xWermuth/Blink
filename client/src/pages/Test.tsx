import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../store/test/test.actions";
import { getCount } from "../store/test/test.selectors";

export const Test: React.FC = () => {
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <Fragment>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <h1>{useSelector(getCount)}</h1>
    </Fragment>
  );
};
