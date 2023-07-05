import { BasketFoodComponent, type BasketFoodProps } from '../../atoms/basket-food/basketFood.component';
import './BasketFoodList.component.scss';

export interface BasketFoodListComponentProps {
	basketFoodList: BasketFoodProps[];
}

export const BasketFoodListComponent = ({ basketFoodList }: BasketFoodListComponentProps) => (
	<div>
		{basketFoodList.map((basketFood: BasketFoodProps) => (
			<div className='basket-food-list'>
				<BasketFoodComponent
					foodName={basketFood.foodName}
					foodPrice={basketFood.foodPrice}
					foodQuantity={basketFood.foodQuantity}
					foodDescription={basketFood.foodDescription}
					foodImage={basketFood.foodImage}
					onAdd={basketFood.onAdd}
					onDelete={basketFood.onDelete}
				/>
			</div>
		))}
	</div>
);
