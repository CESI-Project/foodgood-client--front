import './cores/assets/scss/main.scss';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { LoginContainer } from './pages/login/Login.container';
import { UserInfoProvider } from './cores/contexts/User.provider';

export const App = () => (
	<UserInfoProvider>
		<Routes>
			<Route
				path='/'
				element={<LoginContainer />}
			/>
		</Routes>
	</UserInfoProvider>
);
