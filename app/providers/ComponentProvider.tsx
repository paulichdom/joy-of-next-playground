"use client"
import { createContext, ReactNode, useContext, useState } from "react";
import { ComponentKey, components } from "../components";

const componentsKeys = Object.keys(components);
const defaultComponent = componentsKeys[
  componentsKeys.length - 1
] as ComponentKey;

export type ComponentContextType = {
  selectedComponent: ComponentKey;
  setSelectedComponent: (value: React.SetStateAction<ComponentKey>) => void;
};

const initialState: ComponentContextType = {
  selectedComponent: defaultComponent,
  setSelectedComponent: () => {},
};

export const ComponentContext =
  createContext<ComponentContextType>(initialState);

export const ComponentProvider = ({ children }: { children: ReactNode }) => {
  const [selectedComponent, setSelectedComponent] =
    useState<ComponentKey>(defaultComponent);

  return (
    <ComponentContext.Provider
      value={{ selectedComponent, setSelectedComponent }}
    >
      {children}
    </ComponentContext.Provider>
  );
};

export const useComponentContext = () => {
  const context = useContext(ComponentContext);

  if (!context) {
    throw new Error(
      "useComponentContext must be used within a Component Provider",
    );
  }

  return context;
};
