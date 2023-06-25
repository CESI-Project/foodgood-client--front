import type { Meta, StoryObj } from '@storybook/react';
import { AccountTextBox } from './AccountTextBox.component';

const meta: Meta<typeof AccountTextBox> = {
	title: 'AccountTextBox',
	component: AccountTextBox,
};
export default meta;

type Story = StoryObj<typeof AccountTextBox>;

export const Primary: Story = {
	args: {
		id:"1",
        name:"mail",
        value:"jaques@random.com",
		onSelect: ()=> console.log("bite")
	},
};