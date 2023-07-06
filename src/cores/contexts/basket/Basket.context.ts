import { createContext, useContext } from 'react';
import type { Basket } from '../../models/Basket';

export interface BasketInfo {
	currentBasket?: Basket;
	setCurrentBasket: (basket: Basket | undefined) => void;
	addBasket: ({ userId, restaurantId, restaurantName, foods }: Basket) => void;
	deleteBasket: () => void;
}

export const BasketContext = createContext<BasketInfo>({} as any);
export const BasketContextProvider = BasketContext.Provider;
export const useBasketContext = () => useContext(BasketContext);
