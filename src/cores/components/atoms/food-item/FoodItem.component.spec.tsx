import { render, screen } from '@testing-library/react';
import { FoodItemComponent } from './FoodItem.component';

describe('FoodItemComponent', () => {
	it('renders the food item component with correct title, description, price, and image', () => {
		const foodItemProps = {
			title: 'Pizza Margherita',
			description: 'Delicious pizza with mozzarella and basil',
			price: 8.99,
			image: 'pizza.jpg',
		};

		render(
			<FoodItemComponent
				title={foodItemProps.title}
				description={foodItemProps.description}
				price={foodItemProps.price}
				image={foodItemProps.image}
			/>,
		);

		const titleElement = screen.getByText(foodItemProps.title);
		const descriptionElement = screen.getByText(foodItemProps.description);
		const priceElement = screen.getByText(`${foodItemProps.price} €`);
		const imageElement = screen.getByAltText(foodItemProps.title);

		expect(titleElement).toBeInTheDocument();
		expect(descriptionElement).toBeInTheDocument();
		expect(priceElement).toBeInTheDocument();
		expect(imageElement).toBeInTheDocument();
		expect(imageElement).toHaveAttribute('src', foodItemProps.image);
	});
});
