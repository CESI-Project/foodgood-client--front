import { useBasketContext } from '../../../contexts/basket/Basket.context';
import { BasketLayerComponent } from './BasketLayer.component';

export const BasketLayerContainer = () => {
	const { currentBasket } = useBasketContext();

	return currentBasket && <BasketLayerComponent currentBasket={currentBasket} />;
};
