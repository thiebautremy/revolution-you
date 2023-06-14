import { createContext, useState, useContext, ReactElement } from "react";

type AppContextType = {
  appContext: StateType;
  setAppContext: (newValue: StateType) => void;
};
type StateType = {
  language: string;
};

type Props = { children: ReactElement };

const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppContextProvider: React.FC<Props> = ({ children }) => {
  const [appContext, setAppContext] = useState<StateType>({
    language: "fr",
  });

  return (
    <AppContext.Provider
      value={{
        appContext,
        setAppContext,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
