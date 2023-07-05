import { render, screen } from '@testing-library/react';
import { FoodCategoryItemComponent } from './FoodCategoryItem.component';
import { FOOD_TYPE } from '../../../enum/FoodType.enum';

describe('FoodCategoryComponentItem', () => {
	it('renders the food category component with correct image source, alt text and name', () => {
		const foodCategory = FOOD_TYPE.PIZZA;
		render(<FoodCategoryItemComponent foodCategory={foodCategory} />);
		const imageElement = screen.getByAltText(foodCategory);
		const nameElement = screen.getByText(foodCategory);
		expect(nameElement).toBeInTheDocument();
		expect(imageElement).toBeInTheDocument();
		expect(imageElement).toHaveAttribute('src', `src/cores/assets/images/png/category/${foodCategory}.png`);
	});
});
