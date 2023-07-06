import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContextProvider } from './User.context';
import type { ROLE } from '../../enum/Role.enum';

interface UserContextProviderProps {
	children: ReactNode;
}

export interface UserContextProps {
	userId: string;
	role: ROLE;
	token: string;
}

export const UserInfoProvider = ({ children }: UserContextProviderProps) => {
	const [currentUser, setCurrentUser] = useState<UserContextProps>();
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const navigate = useNavigate();

	const user = JSON.parse(sessionStorage.getItem('user') || '{}');

	const checkLogin = () => {
		const { token } = user;

		if (token) {
			setCurrentUser(user);
			setIsAuthenticated(true);
		} else {
			setIsAuthenticated(false);
			navigate('/login');
		}
	};

	const logIn = () => {
		setCurrentUser(user);
		setIsAuthenticated(true);
		navigate('/accueil');
	};

	const logOut = () => {
		setCurrentUser(undefined);
		setIsAuthenticated(false);
		sessionStorage.removeItem('user');
	};

	useEffect(() => {
		checkLogin();
	}, [isAuthenticated]);

	const context = {
		currentUser,
		setCurrentUser,
		checkLogin,
		logOut,
		isAuthenticated,
		setIsAuthenticated,
		logIn,
	};

	return <UserContextProvider value={context}>{children}</UserContextProvider>;
};
