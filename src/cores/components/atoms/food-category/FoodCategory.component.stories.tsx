import type { Meta, StoryObj } from '@storybook/react';
import { FoodCategoryComponent } from './FoodCategory.component';
import { FOOD_CATEGORY } from '../../../enum/FoodCategory.enum';

const meta: Meta<typeof FoodCategoryComponent> = {
	title: 'FoodCategory',
	component: FoodCategoryComponent,
};
export default meta;

type Story = StoryObj<typeof FoodCategoryComponent>;

export const Primary: Story = {
	args: {
		foodCategory: FOOD_CATEGORY.TACOS,
	},
};
