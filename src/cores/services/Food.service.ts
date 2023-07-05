import { authHeader } from '../utils/authHeader';
import type { Food } from '../models/Food';
import { BACKEND_URI } from './index';

export const getFoods = (restaurantId?: string): Promise<Food[]> =>
	fetch(`${BACKEND_URI}/meals/byRestaurant/${restaurantId}`, { headers: authHeader() }).then(response =>
		response.json(),
	);
