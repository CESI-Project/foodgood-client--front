import './Input.component.scss';
import type { ReactNode } from 'react';

interface InputComponentProps {
	placeholder: string;
	icon?: ReactNode;
	onChange: () => void;
}

export const InputComponent = ({ placeholder, icon, onChange }: InputComponentProps) => (
	<div className='input'>
		{icon && (
			<div
				data-testid='input-icon'
				className='input__icon'
			>
				{icon}
			</div>
		)}
		<input
			id={placeholder}
			className={`input__field ${icon ? 'input__field--with-icon' : ''}`}
			placeholder={placeholder}
			onChange={onChange}
		/>
	</div>
);
