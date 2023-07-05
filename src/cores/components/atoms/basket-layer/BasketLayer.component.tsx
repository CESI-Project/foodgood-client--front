import { Link } from 'react-router-dom';
import type { Basket } from '../../../models/Basket';
import './BasketLayer.component.scss';

interface BasketLayerComponentProps {
	currentBasket?: Basket;
}

export const BasketLayerComponent = ({ currentBasket }: BasketLayerComponentProps) => (
	<Link
			to='/order-confirmation'
			data-testid='to-confirmation'
		>
	<div className='basket-layer'>
		<div className='basket-layer__restaurant-name'>{currentBasket?.restaurantName}</div>
		<div className='basket-layer__description'>Panier en cours ...</div>
	</div>
	</Link>
);
