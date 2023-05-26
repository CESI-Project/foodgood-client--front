import { Link } from 'react-router-dom';
import { SearchIcon } from '../../cores/assets/images/icons';
import { InputComponent } from '../../cores/components/atoms/input/Input.component';
import { FoodCategoryBar } from '../../cores/components/molecules/food-category-bar/FoodCategoryBar.component';
import { RestaurantItemComponent } from '../../cores/components/atoms/restaurant-item/RestaurantItem.component';
import './Home.component.scss';

interface HomeComponentProps {}

export const HomeComponent = () => (
	<div className='home'>
		<div className='home__location'>25 rue de la paix</div>
		<InputComponent
			placeholder='Restaurant ...'
			type='text'
			icon={<SearchIcon />}
		/>
		<FoodCategoryBar />
		<div className='home__restaurant'>
			<Link to={`/restaurant/${1}`}>
				<RestaurantItemComponent
					id={1}
					title='Pizza Hut'
					image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.-VPR8v-PCD7Yvi5uJ88SWAHaEK%26pid%3DApi&f=1&ipt=53e6cbdbdce4bec006d2b722b557aba6e7ce42c4a7fee3ef48a1934ff6094659&ipo=images'
					address='15 rue de Demain'
					rating={4.5}
				/>
			</Link>
			<Link to={`/restaurant/${2}`}>
				<RestaurantItemComponent
					id={2}
					title='Canard Street'
					image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sortiraparis.com%2Fimages%2F58%2F1415%2F382998-canard-street-paris-4.jpg&f=1&nofb=1&ipt=7d2eba4852b87758fc46df7fc747ed1556bfb657de179444effd2bc4d7be6961&ipo=images'
					address='15 rue de Hier'
					rating={4.5}
				/>
			</Link>
		</div>
	</div>
);
