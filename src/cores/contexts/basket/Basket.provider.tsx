import type { ReactNode } from 'react';
import { useState } from 'react';
import type { Basket } from '../../models/Basket';
import { BasketContextProvider } from './Basket.context';
import type { Meal } from '../../models/Meal';

interface BasketProviderProps {
	children: ReactNode;
}

export const BasketInfoProvider = ({ children }: BasketProviderProps) => {
	const [currentBasket, setCurrentBasket] = useState<Basket>();

	const basket = JSON.parse(sessionStorage.getItem('basket') || '{}');

	const deleteBasket = () => {
		setCurrentBasket(undefined);
		sessionStorage.removeItem('basket');
	};

	const addBasket = ({ userId, restaurantId, restaurantName, meals }: Basket) => {
		if (restaurantId === basket.restaurantId) {
			const newMeals = [...basket.meals, ...(meals as Meal[])];
			const totalPrice = newMeals.reduce((acc, meal) => acc + meal.price, 0);
			setCurrentBasket({ userId, restaurantId, restaurantName, totalPrice, meals: newMeals });
			sessionStorage.setItem(
				'basket',
				JSON.stringify({
					userId,
					restaurantId,
					restaurantName,
					totalPrice,
					meals: newMeals,
				}),
			);
			return;
		}

		setCurrentBasket({ userId, restaurantId, restaurantName, meals });
		sessionStorage.setItem('basket', JSON.stringify({ userId, restaurantId, restaurantName, meals }));
	};

	const context = {
		currentBasket,
		setCurrentBasket,
		addBasket,
		deleteBasket,
	};

	return <BasketContextProvider value={context}>{children}</BasketContextProvider>;
};
