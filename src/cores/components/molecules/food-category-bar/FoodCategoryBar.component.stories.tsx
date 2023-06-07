import type { Meta, StoryObj } from '@storybook/react';
import { FoodCategoryBar } from './FoodCategoryBar.component';

const meta: Meta<typeof FoodCategoryBar> = {
	title: 'FoodCategoryBar',
	component: FoodCategoryBar,
};
export default meta;

type Story = StoryObj<typeof FoodCategoryBar>;

export const Primary: Story = {
	args: {},
};
