import { BACKEND_URI } from './index';
import { authHeader } from '../utils/authHeader';
import type { Order } from '../models/Order';

export const getOrderStatus = (id?: string): Promise<Order> =>
	fetch(`${BACKEND_URI}/orders/${id}/status`, {
		method: 'GET',
		headers: authHeader(),
	}).then(response => response.json());
