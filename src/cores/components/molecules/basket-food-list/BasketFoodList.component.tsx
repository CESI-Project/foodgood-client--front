import { BasketFoodComponent, type BasketFoodProps } from "../../atoms/basket-food/basketFood.component";
import "./BasketFoodList.component.scss"


export interface BasketFoodListComponentProps {
    basketFoodList: BasketFoodProps[];
}

export const BasketFoodListComponent = ({basketFoodList}: BasketFoodListComponentProps ) => (
    <div>
        {basketFoodList.map((basketFood: BasketFoodProps) => 
            <div className="foodItem"><BasketFoodComponent {...basketFood} /></div>
        )}
    </div>
)