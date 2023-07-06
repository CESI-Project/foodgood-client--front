import type { meal_TYPE } from '../enum/mealType.enum';

export interface Restaurant {
	_id?: string;
	name?: string;
	imageUrl?: string;
	rate?: number;
	mealType?: meal_TYPE;
	address?: string;
}
