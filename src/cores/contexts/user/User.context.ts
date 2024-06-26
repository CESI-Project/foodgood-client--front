import { createContext, useContext } from 'react';
import type { UserContextProps } from './User.provider';

export interface UserInfo {
	currentUser?: UserContextProps;
	setCurrentUser: (user: UserContextProps | undefined) => void;
	checkLogin: () => void;
	logOut: () => void;
	isAuthenticated: boolean;
	setIsAuthenticated: (prevState: boolean) => void;
	logIn: () => void;
}

export const UserContext = createContext<UserInfo>({} as any);
export const UserContextProvider = UserContext.Provider;
export const useUserContext = () => useContext(UserContext);
