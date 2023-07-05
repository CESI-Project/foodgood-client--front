import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { BasketFoodListComponent } from './BasketFoodList.component';

const mockBasketFoodList = [
	{
		foodName: 'Pizza',
		foodPrice: 10.99,
		foodQuantity: 2,
		foodDescription: 'Délicieuse pizza au fromage',
		foodImage: 'pizza.jpg',
		onAdd: vi.fn(),
		onDelete: vi.fn(),
	},
	{
		foodName: 'Hamburger',
		foodPrice: 8.99,
		foodQuantity: 1,
		foodDescription: 'Délicieux hamburger avec des frites',
		foodImage: 'hamburger.jpg',
		onAdd: vi.fn(),
		onDelete: vi.fn(),
	},
];

test('renders BasketFoodListComponent correctly', () => {
	render(<BasketFoodListComponent basketFoodList={mockBasketFoodList} />);

	// Vérifier que chaque élément de la liste est rendu correctement
	mockBasketFoodList.forEach(basketFood => {
		const nameElement = screen.getByText(basketFood.foodName);
		expect(nameElement).toBeInTheDocument();

		const priceElement = screen.getByText(`${basketFood.foodPrice} €`);
		expect(priceElement).toBeInTheDocument();

		const quantityElement = screen.getByText(basketFood.foodQuantity.toString());
		expect(quantityElement).toBeInTheDocument();

		const descriptionElement = screen.getByText(basketFood.foodDescription);
		expect(descriptionElement).toBeInTheDocument();
	});
});
