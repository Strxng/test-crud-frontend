import React, { createContext, useContext, useMemo, useState } from 'react';
import { IUser } from '../types/User';

interface UserProviderProps {
  children?: JSX.Element;
}

export type UserContextData = {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
};

const UserContext = createContext<UserContextData>({} as UserContextData);

export function UserProvider({ children }: UserProviderProps): JSX.Element {
  const [user, setUser] = useState<IUser | null>(null);

  const contextValue: UserContextData = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user, setUser],
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}

export const useUserContext = (): UserContextData => useContext(UserContext);
