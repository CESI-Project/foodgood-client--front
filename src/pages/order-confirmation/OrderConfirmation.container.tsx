import { useEffect } from 'react';
import { OderConfirmationComponent } from './OderConfirmation.component.tsx';
import { useUserContext } from '../../cores/contexts/user/User.context';

export const OrderConfirmationContainer = () => {
	const { checkLogin } = useUserContext();

	useEffect(() => {
		checkLogin();
	});

	return <OderConfirmationComponent restaurantName='test nom de restaurant' />;
};
