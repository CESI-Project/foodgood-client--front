import type { ReactNode } from 'react';
import { RestaurantItemComponent } from '../../cores/components/atoms/restaurant-item/RestaurantItem.component';
import './Restaurant.component.scss';

interface RestaurantComponentProps {
	id?: string;
	name?: string;
	address?: string;
	rating?: number;
	image?: string;
	foodItems?: ReactNode;
}

export const RestaurantComponent = ({ id, name, image, address, rating, foodItems }: RestaurantComponentProps) => (
	<div className='restaurant'>
		<RestaurantItemComponent
			id={id}
			name={name}
			image={image}
			address={address}
			rating={rating}
		/>
		<div className='restaurant__food-item'>{foodItems}</div>
	</div>
);
