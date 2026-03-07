import { ClockPage } from "./Clock/ClockPage";

export type ComponentKey =
  | "clock"

export type ComponentRecord = Record<
  ComponentKey,
  { name: string; component: React.ComponentType }
>;

export const components: ComponentRecord = {
  "clock": {
    name: "Clock",
    component: ClockPage
  }
};
