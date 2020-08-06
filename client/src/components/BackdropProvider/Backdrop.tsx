import React from "react";
import { useBackdrop } from "../../hooks/useBackdrop";
import { StyledBackDrop } from "./Backdrop.styled";
import { CircularProgress } from "@material-ui/core";

export const Backdrop: React.FC = () => {
  const { isVisible, hideBackdrop } = useBackdrop();

  return (
    <StyledBackDrop open={isVisible} onClick={hideBackdrop}>
      <CircularProgress color="inherit" />
    </StyledBackDrop>
  );
};
