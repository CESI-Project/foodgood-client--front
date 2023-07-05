import { useEffect } from 'react';
import { FollowOrderComponent } from './FollowOrder.component';
import { useUserContext } from '../../cores/contexts/user/User.context';
import { useOrderStatus } from '../../cores/hooks/react-query/useOrder';

export const FollowOrderContainer = () => {
	const { checkLogin } = useUserContext();
	// const { currentBasket } = useBasketContext();
	const { order } = useOrderStatus('64a42925b73dfbd4811e4a5c');

	useEffect(() => {
		checkLogin();
	}, []);

	// @ts-ignore
	// Todo: delete ts-ignore
	return <FollowOrderComponent status={order} />;
};
