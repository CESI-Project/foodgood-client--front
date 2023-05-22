import { StarIcon } from '../../../assets/images/icons';
import './RestaurantItem.component.scss';

interface RestaurantItemComponentProps {
	title: string;
	image: string;
	address: string;
	rating: number;
}

export const RestaurantItemComponent = ({ title, image, address, rating }: RestaurantItemComponentProps) => (
	<div className='restaurant-item'>
		<img
			src={image}
			alt={title}
		/>
		<div className='restaurant-item__content'>
			<div className='restaurant-item__content__title'>{title}</div>
			<div className='restaurant-item__content__rating'>
				{rating}
				<StarIcon />
			</div>
			<div className='restaurant-item__content__location'>
				<div className='restaurant-item__content__location__distance'>1.2km -</div>
				<div>{address}</div>
			</div>
		</div>
	</div>
);
