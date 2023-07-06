import type { Meta, StoryObj } from '@storybook/react';
import { mealCategoryItemComponent } from './mealCategoryItem.component';
import { meal_TYPE } from '../../../enum/mealType.enum';

const meta: Meta<typeof mealCategoryItemComponent> = {
	title: 'mealCategoryItem',
	component: mealCategoryItemComponent,
};
export default meta;

type Story = StoryObj<typeof mealCategoryItemComponent>;

export const Primary: Story = {
	args: {
		mealCategory: meal_TYPE.TACOS,
	},
};
