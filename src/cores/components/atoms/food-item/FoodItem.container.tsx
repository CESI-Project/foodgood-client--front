import { useBasketContext } from '../../../contexts/basket/Basket.context';
import { FoodItemComponent } from './FoodItem.component';
import { useUserContext } from '../../../contexts/user/User.context.ts';

interface FoodItemContainerProps {
	id?: string;
	restaurantId?: string;
	restaurantName?: string;
	name?: string;
	description?: string;
	price?: number;
	imageUrl?: string;
}

export const FoodItemContainer = ({
	id,
	name,
	description,
	price,
	imageUrl,
	restaurantId,
	restaurantName,
}: FoodItemContainerProps) => {
	const { currentUser } = useUserContext();
	const { addBasket } = useBasketContext();

	const onSelect = () => {
		addBasket({
			userId: currentUser?.id,
			restaurantId,
			restaurantName,
			foods: [{ id, name, description, price, imageUrl }],
		});
	};

	return (
		<FoodItemComponent
			id={id}
			name={name}
			description={description}
			price={price}
			imageUrl={imageUrl}
			onSelect={onSelect}
		/>
	);
};
