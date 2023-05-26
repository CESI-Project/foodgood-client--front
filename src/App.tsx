import './cores/assets/scss/main.scss';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { LoginContainer } from './pages/login/Login.container';
import { UserInfoProvider } from './cores/contexts/User.provider';
import { RegisterContainer } from './pages/register/Register.container';
import { HomeContainer } from './pages/home/Home.container';
import { NavigationBarComponent } from './cores/components/atoms/navigation-bar/NavigationBar.component';
import { PAGE } from './cores/enum/Page.enum';

export const App = () => (
	<UserInfoProvider>
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
				element={<div>Restaurant</div>}
			/>
		</Routes>
		{/* Ajouter le changement de page avec le context */}
		<NavigationBarComponent page={PAGE.HOME} />
	</UserInfoProvider>
);
