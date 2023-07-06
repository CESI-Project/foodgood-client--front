import { useEffect } from 'react';
import { OrderConfirmationComponent } from './OrderConfirmation.component';
import { useUserContext } from '../../cores/contexts/user/User.context';
import type { Food } from '../../cores/models/Food';
import { FoodItemContainer } from '../../cores/components/atoms/food-item/FoodItem.container';
import { useBasketContext } from '../../cores/contexts/basket/Basket.context';

export const OrderConfirmationContainer = () => {
	const { checkLogin } = useUserContext();
	const { currentBasket } = useBasketContext();

	useEffect(() => {
		checkLogin();
	}, []);

	const foodItems = currentBasket?.foods?.map((food: Food) => (
		<FoodItemContainer
			_id={food._id}
			key={food._id}
			restaurantId={food.restaurant}
			restaurantName={currentBasket?.restaurantName}
			name={food.name}
			imageUrl={food.imageUrl}
			price={food.price}
			description={food.description}
		/>
	));

	return (
		<OrderConfirmationComponent
			restaurantName='test nom de restaurant'
			foodItems={foodItems}
		/>
	);
};
