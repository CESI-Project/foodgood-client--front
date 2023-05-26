import { FoodCategoryItemComponent } from '../../atoms/food-category-item/FoodCategoryItem.component';
import { FOOD_CATEGORY } from '../../../enum/FoodCategory.enum';
import './FoodCategoryBar.component.scss';

export const FoodCategoryBar = () => (
	<div className='food-category-bar'>
		<FoodCategoryItemComponent foodCategory={FOOD_CATEGORY.TACOS} />
		<FoodCategoryItemComponent foodCategory={FOOD_CATEGORY.PIZZA} />
		<FoodCategoryItemComponent foodCategory={FOOD_CATEGORY.BURGER} />
		<FoodCategoryItemComponent foodCategory={FOOD_CATEGORY.BAGEL} />
		<FoodCategoryItemComponent foodCategory={FOOD_CATEGORY.SUSHI} />
		<FoodCategoryItemComponent foodCategory={FOOD_CATEGORY.SANDWICH} />
	</div>
);
