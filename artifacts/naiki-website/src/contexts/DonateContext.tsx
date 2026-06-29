import { createContext, useContext, useState, type ReactNode } from "react";

interface DonateContextType {
  open: boolean;
  openDonate: () => void;
  closeDonate: () => void;
}

const DonateContext = createContext<DonateContextType>({
  open: false,
  openDonate: () => {},
  closeDonate: () => {},
});

export function DonateProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <DonateContext.Provider value={{ open, openDonate: () => setOpen(true), closeDonate: () => setOpen(false) }}>
      {children}
    </DonateContext.Provider>
  );
}

export const useDonate = () => useContext(DonateContext);
