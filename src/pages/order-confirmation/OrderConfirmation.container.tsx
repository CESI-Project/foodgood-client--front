import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { OrderConfirmationComponent } from './OrderConfirmation.component';
import { useUserContext } from '../../cores/contexts/user/User.context';
import type { Meal } from '../../cores/models/Meal';
import { MealItemContainer } from '../../cores/components/atoms/meal-item/MealItem.container';
import { useBasketContext } from '../../cores/contexts/basket/Basket.context';
import { usePostOrder } from '../../cores/hooks/react-query/useOrder';

export const OrderConfirmationContainer = () => {
	const { checkLogin } = useUserContext();
	const { currentBasket, deleteBasket } = useBasketContext();
	const { currentUser } = useUserContext();
	const { mutate } = usePostOrder();
	const navigate = useNavigate();

	useEffect(() => {
		checkLogin();
	}, []);

	const mealItems = currentBasket?.foods?.map((meal: Meal) => (
		<MealItemContainer
			_id={meal.meal._id}
			key={meal.meal._id}
			restaurantName={currentBasket?.restaurantName}
			name={meal.meal.name}
			imageUrl={meal.meal.imageUrl}
			price={meal.price}
		/>
	));

	const onConfirm = () => {
		const order = {
			user: currentUser?.userId,
			restaurant: currentBasket?.restaurantId,
			foods: currentBasket?.foods?.map(meal => ({
				meal: meal.meal._id,
				quantity: meal.quantity,
				price: meal.price,
			})),
			totalPrice: currentBasket?.totalPrice,
			status: 'waiting',
		};

		// @ts-ignore
		mutate(order, {
			onSuccess: () => {
				deleteBasket();
				navigate('/follow-order');
			},
			onError: () => {
				toast.error('Confirmation échouée', { toastId: 1 });
			},
		});
	};

	return (
		<OrderConfirmationComponent
			restaurantName={currentBasket?.restaurantName}
			mealItems={mealItems}
			onConfirm={onConfirm}
			totalPrice={currentBasket?.totalPrice}
		/>
	);
};
