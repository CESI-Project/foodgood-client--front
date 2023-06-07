import type { ReactNode } from 'react';
import { useState } from 'react';
import type { Basket } from '../../models/Basket';
import { BasketContextProvider } from './Basket.context';
import type { Food } from '../../models/Food';

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

	const addBasket = ({ userId, restaurantId, restaurantName, foods }: Basket) => {
		if (restaurantId === basket.restaurantId) {
			const newFoods = [...basket.foods, ...(foods as Food[])];
			setCurrentBasket({ userId, restaurantId, restaurantName, foods: newFoods });
			sessionStorage.setItem('basket', JSON.stringify({ userId, restaurantId, restaurantName, foods: newFoods }));
			return;
		}

		setCurrentBasket({ userId, restaurantId, restaurantName, foods });
		sessionStorage.setItem('basket', JSON.stringify({ userId, restaurantId, restaurantName, foods }));
	};

	const context = {
		currentBasket,
		setCurrentBasket,
		addBasket,
		deleteBasket,
	};

	return <BasketContextProvider value={context}>{children}</BasketContextProvider>;
};
