import type { Basket } from '../../../models/Basket';
import './BasketLayer.component.scss';

interface BasketLayerComponentProps {
	currentBasket?: Basket;
}

export const BasketLayerComponent = ({ currentBasket }: BasketLayerComponentProps) => (
	<div className='basket-layer'>
		<div className='basket-layer__restaurant-name'>{currentBasket?.restaurantName}</div>
		<div className='basket-layer__description'>Panier en cours ...</div>
	</div>
);
