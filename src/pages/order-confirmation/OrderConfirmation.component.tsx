import { ButtonComponent } from '../../cores/components/atoms/button/Button.component';
import './OrderConfirmation.component.scss';
import type { ReactNode } from 'react';

interface ConfirmationComponentProps {
	restaurantName: string;
	foodItems: ReactNode;
}

export const OrderConfirmationComponent = ({ restaurantName, foodItems }: ConfirmationComponentProps) => (
	<div className='order-confirmation'>
		<h2 className='order-confirmation__title'>Mon Panier</h2>
		<div>{restaurantName}</div>
		<h2 className='order-confirmation__title'>Liste d'articles</h2>
		{foodItems}
		<div className='order-confirmation__total-price'>Prix Total : 12.36</div>
		<ButtonComponent
			type='button'
			designType='primary'
		>
			Valider la commande
		</ButtonComponent>
	</div>
);
