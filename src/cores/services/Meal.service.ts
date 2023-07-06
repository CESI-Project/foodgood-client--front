import { authHeader } from '../utils/authHeader';
import type { Meal } from '../models/Meal';
import { BACKEND_URI } from './index';

export const getMeals = (restaurantId?: string): Promise<Meal[]> =>
	fetch(`${BACKEND_URI}/meals/byRestaurant/${restaurantId}`, { headers: authHeader() }).then(response =>
		response.json(),
	);
