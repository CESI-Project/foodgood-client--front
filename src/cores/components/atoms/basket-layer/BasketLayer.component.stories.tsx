import type { Meta, StoryObj } from '@storybook/react';
import { BasketLayerComponent } from './BasketLayer.component';
import { MEAL_TYPE } from '../../../enum/MealType.enum.ts';

const meta: Meta<typeof BasketLayerComponent> = {
	title: 'BasketLayer',
	component: BasketLayerComponent,
};
export default meta;

type Story = StoryObj<typeof BasketLayerComponent>;

export const Primary: Story = {
	args: {
		currentBasket: {
			userId: '1',
			restaurantId: '1',
			restaurantName: 'Pizza Hut',
			foods: [
				{
					meal: {
						name: 'Pizza Margherita',
						type: MEAL_TYPE.PIZZA,
						price: 12,
					},
					quantity: 1,
					price: 12,
				},
				{
					meal: {
						name: 'Pizza Chicken BBQ',
						type: MEAL_TYPE.PIZZA,
						price: 13,
					},
					quantity: 1,
					price: 13,
				},
			],
		},
	},
};
