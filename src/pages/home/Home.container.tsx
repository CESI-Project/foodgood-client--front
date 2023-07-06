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
	}, []);

	const restaurantItems = restaurants?.map((restaurant: Restaurant) => (
		<Link
			to={`/restaurants/${restaurant._id}`}
			key={restaurant._id}
		>
			<RestaurantItemComponent
				id={restaurant._id}
				name={restaurant.name}
				imageUrl={restaurant.imageUrl}
				address={restaurant.address}
				rate={restaurant.rate}
			/>
		</Link>
	));

	return <HomeComponent restaurantItems={restaurantItems} />;
};
