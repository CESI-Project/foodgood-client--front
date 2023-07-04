import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { RestaurantComponent } from './Restaurant.component';
import { FoodItemContainer } from '../../cores/components/atoms/food-item/FoodItem.container';
import { useRestaurant } from '../../cores/hooks/react-query/useRestaurant';
import { useFood } from '../../cores/hooks/react-query/useFood';
import type { Food } from '../../cores/models/Food';
import { useUserContext } from '../../cores/contexts/user/User.context';

export const RestaurantContainer = () => {
	const { id } = useParams<{ id: string }>();
	const { restaurant } = useRestaurant(id);
	const { foods } = useFood(id);
	const { checkLogin } = useUserContext();

	useEffect(() => {
		checkLogin();
	});

	const foodItems = foods?.map((food: Food) => (
		<FoodItemContainer
			id={food.id}
			key={food.id}
			restaurantId={food.restaurant}
			restaurantName={restaurant?.name}
			name={food.name}
			imageUrl={food.imageUrl}
			price={food.price}
			description={food.description}
		/>
	));

	return (
		<RestaurantComponent
			id={restaurant?._id}
			name={restaurant?.name}
			imageUrl={restaurant?.imageUrl}
			address={restaurant?.address}
			rate={restaurant?.rate}
			foodItems={foodItems}
		/>
	);
};
