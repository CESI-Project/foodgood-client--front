import './FoodItem.component.scss';

interface FoodItemComponentProps {
	id?: string;
	name?: string;
	description?: string;
	price?: number;
	imageUrl?: string;
	onSelect: () => void;
}

export const FoodItemComponent = ({ id, name, description, price, imageUrl, onSelect }: FoodItemComponentProps) => (
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
			src={imageUrl}
			alt={name}
		/>
	</button>
);
