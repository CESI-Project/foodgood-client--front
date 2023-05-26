import type { FormEvent } from 'react';
import type { NavigateFunction } from 'react-router-dom';
import { InputFormComponent } from '../../cores/components/molecules/input-form/InputForm.component';
import { ButtonComponent } from '../../cores/components/atoms/button/Button.component';

interface RegisterComponentProps {
	onRegister: (e: FormEvent<HTMLFormElement>) => void;
	navigate: NavigateFunction;
}

export const RegisterComponent = ({ onRegister, navigate }: RegisterComponentProps) => (
	<div className='login'>
		<div className='login__title'>Bienvenue sur GoodFood</div>
		<form
			id='login'
			onSubmit={onRegister}
			className='login__form'
		>
			<InputFormComponent
				title='Email'
				placeholder='john.martin@gmail.com'
				type='email'
				name='email'
			/>
			<InputFormComponent
				title='Mot de passe'
				placeholder='MyPassword123'
				type='password'
				name='password'
			/>
			<InputFormComponent
				title='Téléphone'
				placeholder='07.00.01.02.03'
				type='text'
				name='phoneNumber'
			/>
			<InputFormComponent
				title='Adresse'
				placeholder='25 rue de la paix'
				type='text'
				name='address'
			/>
			<div className='login__button'>
				<ButtonComponent
					type='button'
					designType='primary'
					onClick={() => navigate('/register')}
				>
					S'inscrire
				</ButtonComponent>
			</div>
		</form>
	</div>
);
