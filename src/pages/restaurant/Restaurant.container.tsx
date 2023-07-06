import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { RestaurantComponent } from './Restaurant.component';
import { MealItemContainer } from '../../cores/components/atoms/meal-item/MealItem.container';
import { useRestaurant } from '../../cores/hooks/react-query/useRestaurant';
import { useMeal } from '../../cores/hooks/react-query/useMeal';
import type { Meal } from '../../cores/models/Meal';
import { useUserContext } from '../../cores/contexts/user/User.context';

export const RestaurantContainer = () => {
	const { id } = useParams<{ id: string }>();
	const { restaurant } = useRestaurant(id);
	const { meals } = useMeal(id);
	const { checkLogin } = useUserContext();

	useEffect(() => {
		checkLogin();
	}, []);

	const mealItems = meals?.map((meal: Meal) => (
		<MealItemContainer
			_id={meal._id}
			key={meal._id}
			restaurantId={meal.restaurant}
			restaurantName={restaurant?.name}
			name={meal.name}
			imageUrl={meal.imageUrl}
			price={meal.price}
			description={meal.description}
		/>
	));

	return (
		<RestaurantComponent
			id={restaurant?._id}
			name={restaurant?.name}
			imageUrl={restaurant?.imageUrl}
			address={restaurant?.address}
			rate={restaurant?.rate}
			mealItems={mealItems}
		/>
	);
};
