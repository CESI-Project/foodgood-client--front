//get order and restaurant information

import { ButtonComponent } from "../../cores/components/atoms/button/Button.component";
import "./Confirmation.component.scss";
interface ConfirmationComponentProps{
    restaurantName: string;
}

export const ConfirmationComponent = ({restaurantName}: ConfirmationComponentProps) => (
    <div>
        <h2>Mon Panier</h2>
        <div> {restaurantName}  </div>
        {/* add link to restaurant/id from order*/}
        <h2>Liste d'articles</h2>
        {//* TODO: list all items in the cart and adresse de livraison
        }

        <div className="totalPrice">
            Prix Total : 12.36
            {/* get total price from back  */}
        </div>

        <ButtonComponent type="button" designType="primary" className="confirmationButton button__primary" > 
            valider la commande
        </ButtonComponent>
    </div>
);