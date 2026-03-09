"use client";
import { useComponentContext } from "../providers/ComponentProvider";
import { ClockPage } from "./Clock/ClockPage";
import { DrumMachine } from "./DrumMachine/DrumMachine";

export type ComponentKey = "clock" | "drum-machine";

export type ComponentRecord = Record<
  ComponentKey,
  { name: string; component: React.ComponentType }
>;

export const components: ComponentRecord = {
  "drum-machine": {
    name: "Drum Machine",
    component: DrumMachine,
  },
  clock: {
    name: "Clock",
    component: ClockPage,
  },
};

export const SelectedComponent = () => {
  const { selectedComponent } = useComponentContext();
  const ComponentToRender = components[selectedComponent].component;

  return <ComponentToRender />;
};
