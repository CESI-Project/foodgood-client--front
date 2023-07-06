import { render, screen } from '@testing-library/react';
import { MealCategoryItemComponent } from './MealCategoryItem.component';
import { MEAL_TYPE } from '../../../enum/MealType.enum';

describe('mealCategoryComponentItem', () => {
	it('renders the meal category component with correct image source, alt text and name', () => {
		const mealType = MEAL_TYPE.PIZZA;
		render(<MealCategoryItemComponent mealType={mealType} />);
		const imageElement = screen.getByAltText(mealType);
		const nameElement = screen.getByText(mealType);
		expect(nameElement).toBeInTheDocument();
		expect(imageElement).toBeInTheDocument();
		expect(imageElement).toHaveAttribute('src', `src/cores/assets/images/png/category/${mealType}.png`);
	});
});
