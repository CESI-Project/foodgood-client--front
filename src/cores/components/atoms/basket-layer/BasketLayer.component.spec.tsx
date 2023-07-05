import { render, screen } from '@testing-library/react';
import { BasketLayerComponent } from './BasketLayer.component';

test('renders BasketLayerComponent correctly', () => {
	const restaurantName = 'Restaurant ABC';

	render(<BasketLayerComponent currentBasket={{ restaurantName }} />);

	// Vérifier que le nom du restaurant est rendu correctement
	const restaurantNameElement = screen.getByText(restaurantName);
	expect(restaurantNameElement).toBeInTheDocument();

	// Vérifier que la description est rendue
	const descriptionElement = screen.getByText('Panier en cours ...');
	expect(descriptionElement).toBeInTheDocument();
});
