import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { HomeComponent } from './Home.component';
import { RestaurantItemComponent } from '../../cores/components/atoms/restaurant-item/RestaurantItem.component';
import type { Restaurant } from '../../cores/models/Restaurant';
import { useRestaurants } from '../../cores/hooks/react-query/useRestaurant';
import { useUserContext } from '../../cores/contexts/user/User.context';

export const HomeContainer = () => {
	const { restaurants } = useRestaurants();
	const { checkLogin } = useUserContext();

	useEffect(() => {
		checkLogin();
	});

	const restaurantItems = restaurants?.map((restaurant: Restaurant) => (
		<Link
			to={`/restaurant/${restaurant.id}`}
			key={restaurant.id}
		>
			<RestaurantItemComponent
				id={restaurant.id}
				name={restaurant.name}
				image={restaurant.image}
				address={restaurant.address}
				rating={restaurant.rating}
			/>
		</Link>
	));

	return <HomeComponent restaurantItems={restaurantItems} />;
};
