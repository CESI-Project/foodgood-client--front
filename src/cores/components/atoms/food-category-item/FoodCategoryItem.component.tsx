import type { FOOD_TYPE } from '../../../enum/FoodType.enum';
import './FoodCategoryItem.component.scss';

interface FoodCategoryComponentItemProps {
	foodCategory: FOOD_TYPE;
}

export const FoodCategoryItemComponent = ({ foodCategory }: FoodCategoryComponentItemProps) => (
	<div className='food-category-item'>
		<img
			src={`src/cores/assets/images/png/category/${foodCategory}.png`}
			alt={foodCategory}
		/>
		<div className='food-category-item__name'>{foodCategory}</div>
	</div>
);
