import { FoodItemComponent } from '../../cores/components/atoms/food-item/FoodItem.component';
import { RestaurantItemComponent } from '../../cores/components/atoms/restaurant-item/RestaurantItem.component';
import './Restaurant.component.scss';

interface RestaurantComponentProps {}

export const RestaurantComponent = () => (
	<div className='restaurant'>
		<RestaurantItemComponent
			id={1}
			title='Pizza Hut'
			image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.-VPR8v-PCD7Yvi5uJ88SWAHaEK%26pid%3DApi&f=1&ipt=53e6cbdbdce4bec006d2b722b557aba6e7ce42c4a7fee3ef48a1934ff6094659&ipo=images'
			address='15 rue de Demain'
			rating={4.5}
		/>
		<div className='restaurant__food-item'>
			<FoodItemComponent
				title='Pizza Margherita'
				description='Pizza with tomato sauce and mozzarella'
				price={12}
				image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Xlx7oZVd_khsvg4O92O6DgHaE8%26pid%3DApi&f=1&ipt=0873b4d7b64aa2f46c443b4e8acb4adafce646fd12c9018c5a8accadec77e578&ipo=images'
			/>
			<FoodItemComponent
				title='Pizza Margherita'
				description='Pizza with tomato sauce and mozzarella'
				price={12}
				image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Xlx7oZVd_khsvg4O92O6DgHaE8%26pid%3DApi&f=1&ipt=0873b4d7b64aa2f46c443b4e8acb4adafce646fd12c9018c5a8accadec77e578&ipo=images'
			/>
			<FoodItemComponent
				title='Pizza Margherita'
				description='Pizza with tomato sauce and mozzarella'
				price={12}
				image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Xlx7oZVd_khsvg4O92O6DgHaE8%26pid%3DApi&f=1&ipt=0873b4d7b64aa2f46c443b4e8acb4adafce646fd12c9018c5a8accadec77e578&ipo=images'
			/>
			<FoodItemComponent
				title='Pizza Margherita'
				description='Pizza with tomato sauce and mozzarella'
				price={12}
				image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Xlx7oZVd_khsvg4O92O6DgHaE8%26pid%3DApi&f=1&ipt=0873b4d7b64aa2f46c443b4e8acb4adafce646fd12c9018c5a8accadec77e578&ipo=images'
			/>
		</div>
	</div>
);
