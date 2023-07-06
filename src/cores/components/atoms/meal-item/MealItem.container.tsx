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
	type?: string;
	imageUrl?: string;
}

export const MealItemContainer = ({
	_id,
	name,
	description,
	price,
	imageUrl,
	type,
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
			foods: [
				{
					meal: {
						_id,
						name,
						type,
						price: Number(price),
						imageUrl,
					},
					quantity: 1,
					price: Number(price),
				},
			],
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
