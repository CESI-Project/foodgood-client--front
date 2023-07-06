import './MealItem.component.scss';

interface MealItemComponentProps {
	id?: string;
	name?: string;
	description?: string;
	price?: number;
	imageUrl?: string;
	onSelect: () => void;
}

export const MealItemComponent = ({ id, name, description, price, imageUrl, onSelect }: MealItemComponentProps) => (
	<button
		id={id}
		key={id}
		type='button'
		className='meal-item'
		onClick={() => onSelect()}
	>
		<div className='meal-item__content'>
			<div className='meal-item__content__name'>{name}</div>
			<div className='meal-item__content__description'>{description}</div>
			<div className='meal-item__content__price'>{price} €</div>
		</div>
		<img
			src={imageUrl}
			alt={name}
		/>
	</button>
);
