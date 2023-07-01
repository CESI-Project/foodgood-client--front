import type { Meta, StoryObj } from '@storybook/react';
import { BasketFoodListComponent } from './BasketFoodList.component';

const meta: Meta<typeof BasketFoodListComponent> = {
	title: 'BasketFoodList',
	component: BasketFoodListComponent,
};
export default meta;

type Story = StoryObj<typeof BasketFoodListComponent>;

const fakeBasketFoodList = [{
    foodName: "tacos",
    foodPrice: 18,
    foodQuantity: 1,
    foodDescription: "tacos au foutre",
    foodImage: "src/cores/assets/images/png/category/Tacos.png",
    onAdd: () => { },
    onDelete: () => { },
},
{
    foodName: "tacos",
    foodPrice: 18,
    foodQuantity: 1,
    foodDescription: "tacos au foutre",
    foodImage: "src/cores/assets/images/png/category/Tacos.png",
    onAdd: () => { },
    onDelete: () => { },
},
{
    foodName: "tacos",
    foodPrice: 18,
    foodQuantity: 1,
    foodDescription: "tacos au foutre",
    foodImage: "src/cores/assets/images/png/category/Tacos.png",
    onAdd: () => { },
    onDelete: () => { },
},
{
    foodName: "tacos",
    foodPrice: 18,
    foodQuantity: 1,
    foodDescription: "tacos au foutre tacos au foutretacos au foutretacos au foutretacos au foutretacos au foutretacos au foutretacos au foutretacos au foutretacos au foutretacos au foutretacos au foutretacos au foutretacos au foutretacos au foutretacos au foutretacos au foutretacos au foutretacos au foutretacos au foutretacos au foutretacos au foutretacos au foutretacos au foutre",
    foodImage: "src/cores/assets/images/png/category/Tacos.png",
    onAdd: () => { },
    onDelete: () => { },
}];

export const Primary: Story = {
	args: {basketFoodList: fakeBasketFoodList}
};

