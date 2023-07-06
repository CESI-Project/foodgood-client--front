import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { MealItemComponent } from './MealItem.component';

describe('mealItemComponent', () => {
	it('renders the meal item component with correct name, description, price, and image', () => {
		const mealItemProps = {
			name: 'Pizza Margherita',
			description: 'Delicious pizza with mozzarella and basil',
			price: 8.99,
			imageUrl: 'pizza.jpg',
			onSubmit: vi.fn(),
		};

		render(
			<MealItemComponent
				name={mealItemProps.name}
				description={mealItemProps.description}
				price={mealItemProps.price}
				imageUrl={mealItemProps.imageUrl}
				onSelect={mealItemProps.onSubmit}
			/>,
		);

		const nameElement = screen.getByText(mealItemProps.name);
		const descriptionElement = screen.getByText(mealItemProps.description);
		const priceElement = screen.getByText(`${mealItemProps.price} €`);
		const imageElement = screen.getByAltText(mealItemProps.name);

		expect(nameElement).toBeInTheDocument();
		expect(descriptionElement).toBeInTheDocument();
		expect(priceElement).toBeInTheDocument();
		expect(imageElement).toBeInTheDocument();
		expect(imageElement).toHaveAttribute('src', mealItemProps.imageUrl);
	});
});
