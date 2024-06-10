"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface BioContextProps {
  output: { data: { bio: string }[] };
  loading: boolean;
  setOutput: Dispatch<SetStateAction<{ data: { bio: string }[] }>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export const BioContext = createContext<BioContextProps>({
  output: { data: [] },
  loading: false,
  setOutput: () => {},
  setLoading: () => {},
});

export const BioProvider = ({ children }: { children: ReactNode }) => {
  const [output, setOutput] = useState<{ data: { bio: string }[] }>({
    data: [],
  });
  const [loading, setLoading] = useState(false);

  console.log("Output Values: ", output);

  return (
    <BioContext.Provider value={{ output, setOutput, loading, setLoading }}>
      {children}
    </BioContext.Provider>
  );
};
