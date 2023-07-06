import type { Meta, StoryObj } from '@storybook/react';
import { mealCategoryBar } from './mealCategoryBar.component';

const meta: Meta<typeof mealCategoryBar> = {
	title: 'mealCategoryBar',
	component: mealCategoryBar,
};
export default meta;

type Story = StoryObj<typeof mealCategoryBar>;

export const Primary: Story = {
	args: {},
};
