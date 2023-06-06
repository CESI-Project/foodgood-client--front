import { useParams } from 'react-router-dom';
import { RestaurantComponent } from './Restaurant.component';
import { FoodItemContainer } from '../../cores/components/atoms/food-item/FoodItem.container';
import { useRestaurant } from '../../cores/hooks/react-query/useRestaurant';
import { useFood } from '../../cores/hooks/react-query/useFood';
import type { Food } from '../../cores/models/Food';

export const RestaurantContainer = () => {
	const { id } = useParams<{ id: string }>();
	const { restaurant } = useRestaurant(id);
	const { foods } = useFood(id);

	const foodItems = foods?.map((food: Food) => (
		<FoodItemContainer
			id={food.id}
			key={food.id}
			restaurantId={food.restaurantId}
			name={food.name}
			image={food.image}
			price={food.price}
			description={food.description}
		/>
	));

	return (
		<RestaurantComponent
			id={restaurant?.id}
			name={restaurant?.name}
			image={restaurant?.image}
			address={restaurant?.address}
			rating={restaurant?.rating}
			foodItems={foodItems}
		/>
	);
};
