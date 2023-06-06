import type { ReactNode } from 'react';
import { useState } from 'react';
import type { Basket } from '../../models/Basket';
import { BasketContextProvider } from './Basket.context';
import type { Food } from '../../models/Food.ts';

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

	const addBasket = ({ id, userId, restaurantId, foods }: Basket) => {
		if (restaurantId === basket.restaurantId) {
			const newFoods = [...basket.foods, ...(foods as Food[])];
			setCurrentBasket({ id, userId, restaurantId, foods: newFoods });
			sessionStorage.setItem('basket', JSON.stringify({ id, userId, restaurantId, foods: newFoods }));
			return;
		}

		setCurrentBasket({ id, userId, restaurantId, foods });
		sessionStorage.setItem('basket', JSON.stringify({ id, userId, restaurantId, foods }));
	};

	const context = {
		currentBasket,
		setCurrentBasket,
		addBasket,
		deleteBasket,
	};

	return <BasketContextProvider value={context}>{children}</BasketContextProvider>;
};
