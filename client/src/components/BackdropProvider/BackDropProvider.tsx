import React, { createContext, useCallback, useState } from "react";

interface BackdropProps {
  showBackdrop(): void;
  hideBackdrop(): void;
  isVisible: boolean;
}

export const BackdropContext = createContext({} as BackdropProps);

export const BackdropProvider: React.FC = ({ children }) => {
  const [isVisible, setOpen] = useState(false);

  const showBackdrop = useCallback(() => setOpen(true), []);

  const hideBackdrop = useCallback(() => setOpen(false), []);

  return (
    <BackdropContext.Provider value={{ isVisible, showBackdrop, hideBackdrop }}>
      {children}
    </BackdropContext.Provider>
  );
};
