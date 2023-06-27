import { AccountTextBox } from "../../cores/components/atoms/account-textbox/AccountTextBox.component";
import './Account.component.scss';

interface AccountComponentProps {
    email: string,
    firstname:string,
    lastname: string,
    phone: string,
    address: string,
    postalCode: string,
    city: string,
    country: string,
}

export const AccountComponent = ({email, firstname, lastname, phone, address, postalCode, city, country}: AccountComponentProps) => (

			<div>
                <h2>Mon compte</h2>
                <ul>
                <li>
                <AccountTextBox
                    name="email"
                    value={email}
                    onSave={() => console.log("email")}
                    
                    />
                </li>
                <li>
                <AccountTextBox 
                    name="Prénom"
                    value={firstname}
                    onSave={() => console.log("firstname")}
                    />
                
                </li>
                <li>
                <AccountTextBox 
                    name="Nom"
                    value={lastname}
                    onSave={() => console.log("lastname")}
                    />
                </li>
                <li>
                <AccountTextBox
                    name="Téléphone"
                    value={phone}
                    onSave={() => console.log("phone")}
                    />
                </li>
                <li>
                <AccountTextBox
                    name="Adresse"
                    value={address}
                    onSave={() => console.log("adress")}
                    />  
                </li>
                <li>
                <AccountTextBox
                    name="Code postal"
                    value={postalCode}
                    onSave={() => console.log("postalCode")}
                    />
                    </li>
                <li>
                <AccountTextBox
                    name="Ville"
                    value={city}
                    onSave={() => console.log("city")}
                    />
                    </li>
                <li className="final">
                <AccountTextBox
                    name="Pays"
                    value={country}
                    onSave={() => console.log("country")}
                    />
                    </li>
    </ul>
            </div>
);
