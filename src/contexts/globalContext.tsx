import { PropsWithChildren, createContext, useState } from "react";

interface GlobalContextPropsInterface {
  user: any;
  sets: any;
  loading: boolean;
  loggedIn: boolean;
  setUser: (user: any) => void;
  setLoading: (loading: boolean) => void;
  setLoggedIn: (loggedIn: boolean) => void;
  setSets: (sets: any) => void;
}

export const GlobalContext = createContext<GlobalContextPropsInterface>({
  user: {},
  sets: [],
  loading: true,
  loggedIn: false,
  setUser: () => {},
  setLoading: () => {},
  setLoggedIn: () => {},
  setSets: () => {},
});

export const GlobalContextProvider = (props: PropsWithChildren) => {
  const [currentUser, setCurrentUser] = useState({});
  const [userSets, setUserSets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        user: currentUser,
        sets: userSets,
        loading: isLoading,
        loggedIn: isLoggedIn,
        setUser: setCurrentUser,
        setLoading: setIsLoading,
        setLoggedIn: setIsLoggedIn,
        setSets: setUserSets,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
