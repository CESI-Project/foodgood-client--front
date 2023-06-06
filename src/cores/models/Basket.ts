import type { Food } from './Food';

export interface Basket {
	id?: string;
	userId?: string;
	restaurantId?: string;
	foods?: Food[];
}
