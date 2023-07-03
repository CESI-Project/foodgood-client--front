import {useEffect} from 'react';
import {AccountComponent} from './Account.component';
import {useUserContext} from '../../cores/contexts/user/User.context';

// interface AccountContainerProps {

// }

export const AccountContainer = () => {
	const { checkLogin } = useUserContext();

	useEffect(() => {
		checkLogin();
	});

	return (
		<AccountComponent
			email='bob@random'
			firstname='bob'
			lastname='random'
			phone='03625'
			address='aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
			postalCode='52666'
			city='la ville'
			country='france'
		/>
	);
};
