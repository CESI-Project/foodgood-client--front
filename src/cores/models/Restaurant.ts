import type { MEAL_TYPE } from '../enum/MealType.enum';

export interface Restaurant {
	_id?: string;
	name?: string;
	imageUrl?: string;
	rate?: number;
	mealType?: MEAL_TYPE;
	address?: string;
}
