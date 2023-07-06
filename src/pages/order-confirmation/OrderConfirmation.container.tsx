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

	const mealItems = currentBasket?.meals?.map((meal: Meal) => (
		<MealItemContainer
			_id={meal._id}
			key={meal._id}
			restaurantId={meal.restaurant}
			restaurantName={currentBasket?.restaurantName}
			name={meal.name}
			imageUrl={meal.imageUrl}
			price={meal.price}
			description={meal.description}
		/>
	));

	const onConfirm = () => {
		const order = {
			user: currentUser?.userId,
			restaurant: currentBasket?.restaurantId,
			meals: currentBasket?.meals,
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
			restaurantName='test nom de restaurant'
			mealItems={mealItems}
			onConfirm={onConfirm}
			totalPrice={currentBasket?.totalPrice}
		/>
	);
};
