import type { Meta, StoryObj } from '@storybook/react';
import { BasketFoodComponent } from './basketFood.component';

const meta: Meta<typeof BasketFoodComponent> = {
	title: 'BasketFood',
	component: BasketFoodComponent,
};
export default meta;

type Story = StoryObj<typeof BasketFoodComponent>;

export const Primary: Story = {
	args: {
        foodName: "tacos",
        foodPrice: 18,
        foodQuantity: 1,
        foodDescription: "tacos au foutre",
        foodImage: "src/cores/assets/images/png/category/Tacos.png",
        onAdd: () => {},
        onDelete: () => {},
	},
};

