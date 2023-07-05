import { useQuery } from 'react-query';
import { getOrderStatus } from '../../services/Order.service';

export const useOrderStatus = (id?: string) => {
	const { data } = useQuery(['order-status', id], () => getOrderStatus(id), { enabled: !!id });

	return { order: data };
};
