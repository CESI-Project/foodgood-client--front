import { useEffect } from 'react';
import { ConfirmationComponent } from './Confirmation.component';
import { useUserContext } from '../../cores/contexts/user/User.context';

export const ConfirmationContainer = () => {
	const { checkLogin } = useUserContext();

	useEffect(() => {
		checkLogin();
	});

	return <ConfirmationComponent restaurantName='test nom de restaurant' />;
};
