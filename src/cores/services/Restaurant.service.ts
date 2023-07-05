import { authHeader } from '../utils/authHeader';
import type { Restaurant } from '../models/Restaurant';
import { BACKEND_URI } from './index';

export const getRestaurants = (): Promise<Restaurant[]> =>
	fetch(`${BACKEND_URI}/restaurants`, { headers: authHeader() }).then(response => response.json());

export const getRestaurant = (id?: string): Promise<Restaurant> =>
	fetch(`${BACKEND_URI}/restaurants/${id}`, { headers: authHeader() }).then(response => response.json());
