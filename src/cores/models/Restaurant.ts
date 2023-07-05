import type { FOOD_TYPE } from '../enum/FoodType.enum';

export interface Restaurant {
	_id?: string;
	name?: string;
	imageUrl?: string;
	rate?: number;
	foodType?: FOOD_TYPE;
	address?: string;
}
