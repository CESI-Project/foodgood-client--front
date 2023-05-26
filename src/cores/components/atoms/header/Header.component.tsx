import { Link } from 'react-router-dom';
import { AccountIcon, LogoTitleIcon } from '../../../assets/images/icons';
import './Header.component.scss';

export const HeaderComponent = () => (
	<div className='header'>
		<Link
			to='/'
			data-testid='logo-icon'
		>
			<LogoTitleIcon />
		</Link>
		<Link
			to='/account'
			data-testid='account-icon'
		>
			<AccountIcon />
		</Link>
	</div>
);
