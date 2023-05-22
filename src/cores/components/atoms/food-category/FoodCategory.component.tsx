import type { FOOD_CATEGORY } from '../../../enum/FoodCategory.enum';
import './FoodCategory.component.scss';

interface FoodCategoryComponentProps {
	foodCategory: FOOD_CATEGORY;
}

export const FoodCategoryComponent = ({ foodCategory }: FoodCategoryComponentProps) => (
	<div className='food-category'>
		<img
			src={`src/cores/assets/images/png/category/${foodCategory}.png`}
			alt={foodCategory}
		/>
		<div className='food-category__name'>{foodCategory}</div>
	</div>
);
