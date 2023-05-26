import { render, screen } from '@testing-library/react';
import { RestaurantItemComponent } from './RestaurantItem.component';

describe('RestaurantItemComponent', () => {
	it('renders the restaurant item component with correct title, image, address, and rating', () => {
		const restaurantItemProps = {
			id: 1,
			title: 'Restaurant Name',
			image: 'restaurant.jpg',
			address: '123 Main Street',
			rating: 4.5,
		};

		render(
			<RestaurantItemComponent
				id={restaurantItemProps.id}
				title={restaurantItemProps.title}
				image={restaurantItemProps.image}
				address={restaurantItemProps.address}
				rating={restaurantItemProps.rating}
			/>,
		);

		const titleElement = screen.getByText(restaurantItemProps.title);
		const imageElement = screen.getByAltText(restaurantItemProps.title);
		const ratingElement = screen.getByText(restaurantItemProps.rating.toString());
		const addressElement = screen.getByText(restaurantItemProps.address);

		expect(titleElement).toBeInTheDocument();
		expect(imageElement).toBeInTheDocument();
		expect(imageElement).toHaveAttribute('src', restaurantItemProps.image);
		expect(ratingElement).toBeInTheDocument();
		expect(addressElement).toBeInTheDocument();
	});
});
