import './FoodItem.component.scss';

interface FoodItemComponentProps {
	title: string;
	description: string;
	price: number;
	image: string;
}

export const FoodItemComponent = ({ title, description, price, image }: FoodItemComponentProps) => (
	<div className='food-item'>
		<div className='food-item__content'>
			<div className='food-item__content__title'>{title}</div>
			<div className='food-item__content__description'>{description}</div>
			<div className='food-item__content__price'>{price} €</div>
		</div>
		<div className='food-item__image'>
			<img
				src={image}
				alt={title}
			/>
		</div>
	</div>
);
