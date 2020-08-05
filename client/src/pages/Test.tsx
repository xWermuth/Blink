import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../store/test/test.actions";

export const Test: React.FC = () => {
  const dispatch = useDispatch();
  const handleIncrement = () => {
    console.log("--incrementing");
    dispatch(increment());
  };

  const handleDecrement = () => {
    console.log("--decrementing");
    dispatch(decrement());
  };
  return (
    <Fragment>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <h1>number</h1>
    </Fragment>
  );
};
