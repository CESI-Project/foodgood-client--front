import { render, screen } from '@testing-library/react';
import { NavigationBarComponent } from './NavigationBar.component';
import { PAGE } from '../../../enum/Page.enum';

describe('NavigationBarComponent', () => {
	it('renders the navigation bar component with correct icons and active page', () => {
		render(<NavigationBarComponent page={PAGE.HOME} />);

		const homeElement = screen.getByText('Accueil');
		const orderElement = screen.getByText('Commande');
		const accountElement = screen.getByText('Compte');

		expect(homeElement).toBeInTheDocument();
		expect(orderElement).toBeInTheDocument();
		expect(accountElement).toBeInTheDocument();

		expect(homeElement).toHaveClass('enable');
		expect(orderElement).not.toHaveClass('enable');
		expect(accountElement).not.toHaveClass('enable');
	});
});
