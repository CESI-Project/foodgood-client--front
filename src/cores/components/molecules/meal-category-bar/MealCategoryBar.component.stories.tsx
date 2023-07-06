import type { Meta, StoryObj } from '@storybook/react';
import { MealCategoryBar } from './MealCategoryBar.component';

const meta: Meta<typeof MealCategoryBar> = {
	title: 'mealCategoryBar',
	component: MealCategoryBar,
};
export default meta;

type Story = StoryObj<typeof MealCategoryBar>;

export const Primary: Story = {
	args: {},
};
