import type { ReactNode } from 'react';
import { RestaurantItemComponent } from '../../cores/components/atoms/restaurant-item/RestaurantItem.component';
import './Restaurant.component.scss';

interface RestaurantComponentProps {
	id?: string;
	name?: string;
	address?: string;
	rate?: number;
	imageUrl?: string;
	mealItems?: ReactNode;
}

export const RestaurantComponent = ({ id, name, imageUrl, address, rate, mealItems }: RestaurantComponentProps) => (
	<div className='restaurant'>
		<RestaurantItemComponent
			id={id}
			name={name}
			imageUrl={imageUrl}
			address={address}
			rate={rate}
		/>
		<div className='restaurant__meal-item'>{mealItems}</div>
	</div>
);
