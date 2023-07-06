import { MealCategoryItemComponent } from '../../atoms/meal-category-item/MealCategoryItem.component';
import { MEAL_TYPE } from '../../../enum/MealType.enum';
import './mealCategoryBar.component.scss';

export const mealCategoryBar = () => (
	<div className='meal-category-bar'>
		<MealCategoryItemComponent mealType={MEAL_TYPE.TACOS} />
		<MealCategoryItemComponent mealType={MEAL_TYPE.PIZZA} />
		<MealCategoryItemComponent mealType={MEAL_TYPE.BURGER} />
		<MealCategoryItemComponent mealType={MEAL_TYPE.BAGEL} />
		<MealCategoryItemComponent mealType={MEAL_TYPE.SUSHI} />
		<MealCategoryItemComponent mealType={MEAL_TYPE.SANDWICH} />
	</div>
);
