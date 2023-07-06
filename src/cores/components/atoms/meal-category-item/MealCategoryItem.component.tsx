import type { MEAL_TYPE } from '../../../enum/MealType.enum';
import './MealCategoryItem.component.scss';

interface MealCategoryComponentItemProps {
	mealType: MEAL_TYPE;
}

export const MealCategoryItemComponent = ({ mealType }: MealCategoryComponentItemProps) => (
	<div className='meal-category-item'>
		<img
			src={`src/cores/assets/images/png/category/${mealType}.png`}
			alt={mealType}
		/>
		<div className='meal-category-item__name'>{mealType}</div>
	</div>
);
