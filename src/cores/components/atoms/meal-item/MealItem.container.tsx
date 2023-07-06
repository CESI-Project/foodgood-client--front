import { useBasketContext } from '../../../contexts/basket/Basket.context';
import { MealItemComponent } from './MealItem.component';
import { useUserContext } from '../../../contexts/user/User.context';

interface MealItemContainerProps {
	_id?: string;
	restaurantId?: string;
	restaurantName?: string;
	name?: string;
	description?: string;
	price?: number;
	imageUrl?: string;
}

export const MealItemContainer = ({
	_id,
	name,
	description,
	price,
	imageUrl,
	restaurantId,
	restaurantName,
}: MealItemContainerProps) => {
	const { currentUser } = useUserContext();
	const { addBasket } = useBasketContext();

	const onSelect = () => {
		addBasket({
			userId: currentUser?.userId,
			restaurantId,
			restaurantName,
			meals: [{ _id, name, description, price: Number(price), imageUrl }],
		});
	};

	return (
		<MealItemComponent
			id={_id}
			name={name}
			description={description}
			price={price}
			imageUrl={imageUrl}
			onSelect={onSelect}
		/>
	);
};
