import { useBasketContext } from '../../../contexts/basket/Basket.context';
import { FoodItemComponent } from './FoodItem.component';

interface FoodItemContainerProps {
	id?: string;
	restaurantId?: string;
	name?: string;
	description?: string;
	price?: number;
	image?: string;
}

export const FoodItemContainer = ({ id, name, description, price, image, restaurantId }: FoodItemContainerProps) => {
	const { addBasket } = useBasketContext();

	const onSelect = () => {
		addBasket({
			restaurantId,
			foods: [{ id, name, description, price, image }],
		});
	};

	return (
		<FoodItemComponent
			id={id}
			name={name}
			description={description}
			price={price}
			image={image}
			onSelect={onSelect}
		/>
	);
};
