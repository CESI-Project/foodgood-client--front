import type { Meta, StoryObj } from '@storybook/react';
import { FoodCategoryItemComponent } from './FoodCategoryItem.component';
import { FOOD_CATEGORY } from '../../../enum/FoodType.enum';

const meta: Meta<typeof FoodCategoryItemComponent> = {
	title: 'FoodCategoryItem',
	component: FoodCategoryItemComponent,
};
export default meta;

type Story = StoryObj<typeof FoodCategoryItemComponent>;

export const Primary: Story = {
	args: {
		foodCategory: FOOD_CATEGORY.TACOS,
	},
};
