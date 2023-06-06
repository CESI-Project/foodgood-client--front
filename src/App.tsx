import './cores/assets/scss/main.scss';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { LoginContainer } from './pages/login/Login.container';
import { UserInfoProvider } from './cores/contexts/user/User.provider';
import { RegisterContainer } from './pages/register/Register.container';
import { HomeContainer } from './pages/home/Home.container';
import { HeaderComponent } from './cores/components/atoms/header/Header.component';
import { RestaurantContainer } from './pages/restaurant/Restaurant.container';
import { BasketInfoProvider } from './cores/contexts/basket/Basket.provider';

export const App = () => (
	<UserInfoProvider>
		<BasketInfoProvider>
			<HeaderComponent />
			<Routes>
				<Route
					path='*'
					element={<HomeContainer />}
				/>
				<Route
					path='/login'
					element={<LoginContainer />}
				/>
				<Route
					path='/register'
					element={<RegisterContainer />}
				/>
				<Route
					path='/restaurant/:id'
					element={<RestaurantContainer />}
				/>
			</Routes>
		</BasketInfoProvider>
	</UserInfoProvider>
);
