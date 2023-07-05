import './basketFood.component.scss';

export interface BasketFoodProps {
	foodName: string;
	foodPrice: number;
	foodQuantity: number;
	foodDescription: string;
	foodImage: string;
	onAdd: () => void;
	onDelete: () => void;
}

export const BasketFoodComponent = ({
	foodName,
	foodPrice,
	foodQuantity,
	foodDescription,
	foodImage,
	onAdd,
	onDelete,
}: BasketFoodProps) => (
	<div className='basket-food'>
		<div className='left'>
			<h3>{foodName}</h3>
			<div>{foodDescription}</div>
			<div className='basket-food__price-quantity'>
				<div>
					{foodPrice}
					{' €'}
				</div>

				<div>
					<button
						className='round-button'
						onClick={onDelete}
					>
						-
					</button>
					{foodQuantity}
					<button
						onClick={onAdd}
						className='round-button'
					>
						+
					</button>
				</div>
			</div>
		</div>
		<div className='right'>
			<img
				src={foodImage}
				alt='foodImage'
			/>
		</div>
	</div>
);
