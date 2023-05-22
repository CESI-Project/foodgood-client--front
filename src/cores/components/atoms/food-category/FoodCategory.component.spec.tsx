import { render, screen } from '@testing-library/react';
import { FoodCategoryComponent } from './FoodCategory.component';
import { FOOD_CATEGORY } from '../../../enum/FoodCategory.enum';

describe('FoodCategoryComponent', () => {
	it('renders the food category component with correct image source, alt text and name', () => {
		const foodCategory = FOOD_CATEGORY.PIZZA;
		render(<FoodCategoryComponent foodCategory={foodCategory} />);
		const imageElement = screen.getByAltText(foodCategory);
		const nameElement = screen.getByText(foodCategory);
		expect(nameElement).toBeInTheDocument();
		expect(imageElement).toBeInTheDocument();
		expect(imageElement).toHaveAttribute('src', `src/cores/assets/images/png/category/${foodCategory}.png`);
	});
});
