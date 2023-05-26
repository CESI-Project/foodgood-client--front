import { useNavigate } from 'react-router-dom';
import type { FormEvent } from 'react';
import { toast } from 'react-toastify';
import { RegisterComponent } from './Register.component';
import type { User } from '../../cores/models/User';
import { useRegister } from '../../cores/hooks/react-query/useUser';

export const RegisterContainer = () => {
	const { mutate, isError, isSuccess } = useRegister();
	const navigate = useNavigate();

	const onRegister = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.target as HTMLFormElement);
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;
		const phoneNumber = formData.get('phoneNumber') as string;
		const address = formData.get('address') as string;
		const user: User = { email, password, phoneNumber, address };
		mutate(user);
	};

	if (isSuccess) {
		navigate('/login');
	}

	if (isError) {
		toast.error('Inscription échouée', { toastId: 1 });
	}

	return (
		<RegisterComponent
			onRegister={onRegister}
			navigate={navigate}
		/>
	);
};
