import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { BasketFoodComponent } from './basketFood.component';

test('renders BasketFoodComponent correctly', () => {
	const foodName = 'Pizza';
	const foodPrice = 10.99;
	const foodQuantity = 2;
	const foodDescription = 'Délicieuse pizza au fromage';
	const foodImage = 'pizza.jpg';
	const onAdd = vi.fn();
	const onDelete = vi.fn();

	render(
		<BasketFoodComponent
			foodName={foodName}
			foodPrice={foodPrice}
			foodQuantity={foodQuantity}
			foodDescription={foodDescription}
			foodImage={foodImage}
			onAdd={onAdd}
			onDelete={onDelete}
		/>,
	);

	// Vérifier que les éléments de contenu sont rendus correctement
	const nameElement = screen.getByText(foodName);
	expect(nameElement).toBeInTheDocument();

	const priceElement = screen.getByText(`${foodPrice} €`);
	expect(priceElement).toBeInTheDocument();

	const quantityElement = screen.getByText(foodQuantity.toString());
	expect(quantityElement).toBeInTheDocument();

	const descriptionElement = screen.getByText(foodDescription);
	expect(descriptionElement).toBeInTheDocument();

	// Vérifier que les boutons + et - sont présents
	const addButton = screen.getByText('+');
	expect(addButton).toBeInTheDocument();

	const deleteButton = screen.getByText('-');
	expect(deleteButton).toBeInTheDocument();

	// Simuler un clic sur les boutons + et -
	fireEvent.click(addButton);
	fireEvent.click(deleteButton);

	// Vérifier que les fonctions onAdd et onDelete ont été appelées
	expect(onAdd).toHaveBeenCalledTimes(1);
	expect(onDelete).toHaveBeenCalledTimes(1);
});
