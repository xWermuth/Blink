import styled from "styled-components";
import { Backdrop } from "@material-ui/core";

export const StyledBackDrop = styled(Backdrop)`
  z-index: ${({ theme }) => theme.zIndex.modal + 2};
  color: white;
`;
