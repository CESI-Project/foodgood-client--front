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
        <h2>Liste d'articles</h2>
        {//* TODO: list all items in the cart and adresse de livraison
        }

        <ButtonComponent type="button" designType="primary" > 
            valider la commande
        </ButtonComponent>
    </div>
);