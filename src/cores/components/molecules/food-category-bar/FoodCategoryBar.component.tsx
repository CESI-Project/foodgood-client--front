import { FoodCategoryItemComponent } from '../../atoms/food-category-item/FoodCategoryItem.component';
import { FOOD_TYPE } from '../../../enum/FoodType.enum';
import './FoodCategoryBar.component.scss';

export const FoodCategoryBar = () => (
	<div className='food-category-bar'>
		<FoodCategoryItemComponent foodCategory={FOOD_TYPE.TACOS} />
		<FoodCategoryItemComponent foodCategory={FOOD_TYPE.PIZZA} />
		<FoodCategoryItemComponent foodCategory={FOOD_TYPE.BURGER} />
		<FoodCategoryItemComponent foodCategory={FOOD_TYPE.BAGEL} />
		<FoodCategoryItemComponent foodCategory={FOOD_TYPE.SUSHI} />
		<FoodCategoryItemComponent foodCategory={FOOD_TYPE.SANDWICH} />
	</div>
);
