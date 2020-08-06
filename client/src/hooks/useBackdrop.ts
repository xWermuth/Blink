import { useContext } from "react";
import { BackdropContext } from "../components/BackdropProvider/BackDropProvider";

export const useBackdrop = () => useContext(BackdropContext);
