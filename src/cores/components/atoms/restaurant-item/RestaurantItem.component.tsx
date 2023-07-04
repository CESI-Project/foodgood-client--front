import { StarIcon } from '../../../assets/images/icons';
import './RestaurantItem.component.scss';

interface RestaurantItemComponentProps {
	id?: string;
	name?: string;
	imageUrl?: string;
	address?: string;
	rate?: number;
}

export const RestaurantItemComponent = ({ name, imageUrl, address, rate, id }: RestaurantItemComponentProps) => (
	<div
		className='restaurant-item'
		key={id}
	>
		<img
			src={imageUrl}
			alt={name}
		/>
		<div className='restaurant-item__content'>
			<div className='restaurant-item__content__name'>{name}</div>
			<div className='restaurant-item__content__rating'>
				{rate}
				<StarIcon />
			</div>
			<div className='restaurant-item__content__location'>
				<div className='restaurant-item__content__location__distance'>1.2km -</div>
				<div>{address}</div>
			</div>
		</div>
	</div>
);
