import { useEffect } from 'react';
import { FollowOrderComponent } from './FollowOrder.component';
import { useUserContext } from '../../cores/contexts/user/User.context';
import { useOrderStatus } from '../../cores/hooks/react-query/useOrder';

export const FollowOrderContainer = () => {
	const { checkLogin } = useUserContext();
	const orderId: string | null = JSON.parse(localStorage.getItem('orderId') || '{}');
	const { order } = useOrderStatus(orderId || undefined);

	useEffect(() => {
		checkLogin();
	}, []);

	return <FollowOrderComponent status={order?.status} />;
};
