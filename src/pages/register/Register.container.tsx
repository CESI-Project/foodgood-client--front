import type { FormEvent } from 'react';
import { toast } from 'react-toastify';
import { RegisterComponent } from './Register.component';
import type { User } from '../../cores/models/User';
import { useRegister } from '../../cores/hooks/react-query/useUser';
import {  useNavigate } from 'react-router-dom';

export const RegisterContainer = () => {
	const { mutate } = useRegister();
    const navigate = useNavigate();

	const onRegister = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.target as HTMLFormElement);
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;
		const firstName = formData.get('firstName') as string;
		const lastName = formData.get('lastName') as string;
		const phone = formData.get('phoneNumber') as string;
		const address = formData.get('address') as string;
		const postalCode = formData.get('postalCode') as string;
		const city = formData.get('city') as string;
		const country = formData.get('country') as string;
		const user: User = {
			email,
			password,
			firstName,
			lastName,
			phone,
			address,
			postalCode: Number(postalCode),
			city,
			country,
		};
		mutate(user, {
            onSuccess: () => {
				navigate('/login');
            },
            onError: () => {
                toast.error('Inscription échouée', { toastId: 2 });
            },
        });
	};

	return (
		<RegisterComponent
			onRegister={onRegister}
		/>
	);
};
