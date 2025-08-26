import { createContext } from "react";

export type ComponentContextType = {
  name: string;
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const ComponentContext = createContext<ComponentContextType | null>(
  null
);
