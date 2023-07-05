import { useLocation } from 'react-router-dom';
import { useBasketContext } from '../../../contexts/basket/Basket.context';
import { BasketLayerComponent } from './BasketLayer.component';

export const BasketLayerContainer = () => {
	const location = useLocation();
	const { currentBasket } = useBasketContext();

	return currentBasket && location.pathname!="/order-confirmation" ? <BasketLayerComponent currentBasket={currentBasket} /> : <div />;
};
