import type { ReactNode } from 'react';
import { ButtonComponent } from '../../cores/components/atoms/button/Button.component';
import './OrderConfirmation.component.scss';

interface ConfirmationComponentProps {
	restaurantName: string;
	mealItems: ReactNode;
	onConfirm: () => void;
	totalPrice?: number;
}

export const OrderConfirmationComponent = ({
	restaurantName,
	mealItems,
	onConfirm,
	totalPrice,
}: ConfirmationComponentProps) => (
	<div className='order-confirmation'>
		<h2 className='order-confirmation__title'>Mon Panier</h2>
		<div>{restaurantName}</div>
		<h2 className='order-confirmation__title'>Liste d'articles</h2>
		{mealItems}
		<div className='order-confirmation__total-price'>Prix Total : {totalPrice}</div>
		<ButtonComponent
			type='button'
			designType='primary'
			onClick={() => onConfirm()}
		>
			Valider la commande
		</ButtonComponent>
	</div>
);
