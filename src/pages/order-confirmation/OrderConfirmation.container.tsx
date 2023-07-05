import { useEffect } from 'react';
import { OrderConfirmationComponent } from './OrderConfirmation.component';
import { useUserContext } from '../../cores/contexts/user/User.context';

export const OrderConfirmationContainer = () => {
	const { checkLogin } = useUserContext();

	useEffect(() => {
		checkLogin();
	});

	return <OrderConfirmationComponent restaurantName='test nom de restaurant' />;
};
