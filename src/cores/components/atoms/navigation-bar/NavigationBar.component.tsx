import { PAGE } from '../../../enum/Page.enum';
import { AccountIcon, HomeIcon, OrderIcon } from '../../../assets/images/icons';
import './NavigationBar.component.scss';

interface NavigationBarComponentProps {
	page: PAGE;
}

export const NavigationBarComponent = ({ page }: NavigationBarComponentProps) => (
	<div className='navigation-bar'>
		<div className={`navigation-bar__item ${page === PAGE.HOME && 'enable'}`}>
			<HomeIcon />
			Accueil
		</div>
		<div className={`navigation-bar__item ${page === PAGE.ORDER && 'enable'}`}>
			<OrderIcon />
			Commande
		</div>
		<div className={`navigation-bar__item ${page === PAGE.ACCOUNT && 'enable'}`}>
			<AccountIcon />
			Compte
		</div>
	</div>
);
