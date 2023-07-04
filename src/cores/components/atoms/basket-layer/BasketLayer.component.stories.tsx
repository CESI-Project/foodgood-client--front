import type { Meta, StoryObj } from '@storybook/react';
import { BasketLayerComponent } from './BasketLayer.component';

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
					_id: '1',
					restaurant: '1',
					name: 'Pizza Margherita',
					description: 'Pizza with tomato sauce and mozzarella',
					price: 12,
					imageUrl:
						'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Xlx7oZVd_khsvg4O92O6DgHaE8%26pid%3DApi&f=1&ipt=0873b4d7b64aa2f46c443b4e8acb4adafce646fd12c9018c5a8accadec77e578&ipo=images',
				},
				{
					_id: '2',
					restaurant: '1',
					name: 'Pizza Regina',
					description: 'Pizza with tomato sauce, mozzarella and ham',
					price: 13,
					imageUrl:
						'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.HlSfDbjNq4D9a2rImD_4nwHaEo%26pid%3DApi&f=1&ipt=d80dc156bc9da7ffa62333b188b5a6715df9aa3aec0389213822f96b3a3dd13f&ipo=images',
				},
			],
		},
	},
};
