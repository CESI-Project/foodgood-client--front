import { BACKEND_URI } from './index';
import { authHeader } from '../utils/authHeader';
import type { Order } from '../models/Order';

export const getOrderStatus = (id?: string): Promise<Order> =>
	fetch(`${BACKEND_URI}/orders/${id}/status`, {
		method: 'GET',
		headers: authHeader(),
	}).then(response => response.json());

export const postOrder = (order: Order): Promise<Order> =>
	fetch(`${BACKEND_URI}/orders`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json', ...authHeader() },
		body: JSON.stringify(order),
	})
		.then(response => response.json())
		.then(response => {
			localStorage.setItem('orderId', JSON.stringify(response._id));
			return response;
		});
