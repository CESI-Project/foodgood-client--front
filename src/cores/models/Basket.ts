import type { Meal } from './Meal';
import { STATUS_ENUM } from '../enum/Status.enum';

export interface Basket {
	id?: string;
	userId?: string;
	restaurantId?: string;
	restaurantName?: string;
	foods?: { meal: Meal; quantity: number; price: number }[];
	totalPrice?: number;
	status?: STATUS_ENUM;
}
