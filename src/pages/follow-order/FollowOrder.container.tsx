import { useEffect } from 'react';
import { FollowOrderComponent } from './FollowOrder.component';
import { useUserContext } from '../../cores/contexts/user/User.context';
import { useOrderStatus } from '../../cores/hooks/react-query/useOrder';

export const FollowOrderContainer = () => {
	const { checkLogin } = useUserContext();
	// const { currentBasket } = useBasketContext();
	const { order } = useOrderStatus('6479e0fa9241dd277c4ba116');

	useEffect(() => {
		checkLogin();
	}, []);

	return <FollowOrderComponent status={order} />;
};
