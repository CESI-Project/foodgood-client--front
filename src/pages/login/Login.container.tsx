import type { FormEvent } from 'react';
import { toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';
import { LoginComponent } from './Login.component';
import { useLogin } from '../../cores/hooks/react-query/useLogin';
import type { User } from '../../cores/models/User';
import { useUserContext } from '../../cores/contexts/User.context';

export const LoginContainer = () => {
	const { mutate, isError, isSuccess } = useLogin();
	const { setIsAuthenticated } = useUserContext();

	const onLogin = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.target as HTMLFormElement);
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;
		const user: User = { email, password };
		mutate(user);
	};

	if (isSuccess) {
		setIsAuthenticated(true);
		return (
			<Navigate
				to='/accueil'
				replace
			/>
		);
	}

	if (isError) {
		toast.error('Authentification échouée', { toastId: 1 });
	}

	return <LoginComponent onLogin={onLogin} />;
};
