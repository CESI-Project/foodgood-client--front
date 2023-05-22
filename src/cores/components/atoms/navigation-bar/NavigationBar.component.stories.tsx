import type { Meta, StoryObj } from '@storybook/react';
import { NavigationBarComponent } from './NavigationBar.component';
import { PAGE } from '../../../enum/Page.enum';

const meta: Meta<typeof NavigationBarComponent> = {
	title: 'NavigationBar',
	component: NavigationBarComponent,
};
export default meta;

type Story = StoryObj<typeof NavigationBarComponent>;

export const Primary: Story = {
	args: {
		page: PAGE.HOME,
	},
};
