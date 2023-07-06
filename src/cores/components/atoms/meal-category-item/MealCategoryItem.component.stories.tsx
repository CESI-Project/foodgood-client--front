import type { Meta, StoryObj } from '@storybook/react';
import { MealCategoryItemComponent } from './MealCategoryItem.component';
import { MEAL_TYPE } from '../../../enum/MealType.enum';

const meta: Meta<typeof MealCategoryItemComponent> = {
	title: 'mealCategoryItem',
	component: MealCategoryItemComponent,
};
export default meta;

type Story = StoryObj<typeof MealCategoryItemComponent>;

export const Primary: Story = {
	args: {
		mealType: MEAL_TYPE.TACOS,
	},
};
