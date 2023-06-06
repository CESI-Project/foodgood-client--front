import './FoodItem.component.scss';

interface FoodItemComponentProps {
	id?: string;
	name?: string;
	description?: string;
	price?: number;
	image?: string;
	onSelect: () => void;
}

export const FoodItemComponent = ({ id, name, description, price, image, onSelect }: FoodItemComponentProps) => (
	<button
		id={id}
		key={id}
		type='button'
		className='food-item'
		onClick={() => onSelect()}
	>
		<div className='food-item__content'>
			<div className='food-item__content__name'>{name}</div>
			<div className='food-item__content__description'>{description}</div>
			<div className='food-item__content__price'>{price} €</div>
		</div>
		<img
			src={image}
			alt={name}
		/>
	</button>
);
