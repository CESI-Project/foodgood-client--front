import type { FormEvent } from 'react';
import { InputFormComponent } from '../../cores/components/molecules/input-form/InputForm.component';
import { ButtonComponent } from '../../cores/components/atoms/button/Button.component';

interface RegisterComponentProps {
	onRegister: (e: FormEvent<HTMLFormElement>) => void;
}

export const RegisterComponent = ({ onRegister }: RegisterComponentProps) => (
	<div className='login'>
		<div className='login__title'>Bienvenue sur Goodmeal</div>
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
				title='Prénom'
				placeholder='John'
				type='text'
				name='firstName'
			/>
			<InputFormComponent
				title='Nom de Famille'
				placeholder='Martin'
				type='text'
				name='lastName'
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
			<InputFormComponent
				title='Code Postal'
				placeholder='75000'
				type='text'
				name='postalCode'
			/>
			<InputFormComponent
				title='Ville'
				placeholder='Paris'
				type='text'
				name='city'
			/>
			<InputFormComponent
				title='Pays'
				placeholder='France'
				type='text'
				name='country'
			/>
			<div className='login__button'>
				<ButtonComponent
					type='submit'
					designType='primary'
				>
					S'inscrire
				</ButtonComponent>
			</div>
		</form>
	</div>
);
