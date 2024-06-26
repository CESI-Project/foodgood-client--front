import type { ReactNode } from 'react';
import { SearchIcon } from '../../cores/assets/images/icons';
import { InputComponent } from '../../cores/components/atoms/input/Input.component';
import './Home.component.scss';

interface HomeComponentProps {
	restaurantItems?: ReactNode;
}

export const HomeComponent = ({ restaurantItems }: HomeComponentProps) => (
	<div className='home'>
		<div className='home__location'>25 rue de la paix</div>
		<InputComponent
			placeholder='Restaurant ...'
			type='text'
			icon={<SearchIcon />}
		/>
		{/* <mealCategoryBar /> */}
		<div className='home__restaurant'>{restaurantItems}</div>
	</div>
);
