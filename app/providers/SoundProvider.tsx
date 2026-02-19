"use client";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

export type SoundContextType = {
  soundEnabled: boolean;
  setSoundEnabled: Dispatch<SetStateAction<boolean>>;
};

const initialState: SoundContextType = {
  soundEnabled: true,
  setSoundEnabled: () => {},
};

export const SoundContext = createContext<SoundContextType>(initialState);

export const SoundProvider = ({ children }: { children: React.ReactNode }) => {
  const [soundEnabled, setSoundEnabled] = useState(true);

  return (
    <SoundContext.Provider value={{ soundEnabled, setSoundEnabled }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSoundContext = () => {
  const context = useContext(SoundContext);

  if (!context) {
    throw new Error('useSoundContext must be used within a SoundProvider');
  }

  return context;
};
