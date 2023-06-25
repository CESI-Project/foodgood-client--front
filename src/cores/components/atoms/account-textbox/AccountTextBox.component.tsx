import { useState } from 'react';
import './AccountTextBox.component.scss';
import { ButtonComponent } from '../button/Button.component';

interface AccountTextboxProps {
	id?: string;
	name?: string;
    value?:string;
	onSelect: () => void;
}





export const AccountTextBox = ({ id, name, value,  onSelect }: AccountTextboxProps) => {
	const [isInput, setIsInput] = useState(0);
	const [inputValue, setInputValue] = useState(value);

	const onInputClick = () => {
		onSelect();
		setIsInput(1);
	};

	const onSaveClick = () => {
		setIsInput(0);
		//add save on base here
	}

	
    return (<div className='account-textbox'>
        <div className="textbox-name">{name}</div>
		{isInput===0 ? (
			<div
			id={id}
			key={id}
			className='account-information'
			onClick={() =>onInputClick()}
		>
			<div className='textbox-value'><span>{inputValue}</span></div>
		</div>)
		:
			<div>
			<input
			id={id}
			key={id}
			type='text'
			value={inputValue}
			className='account-information'
			autoFocus
			onChange={(e) => setInputValue(e.target.value)}
			/>
			<ButtonComponent 
			children="sauvegarder"
			key={id}
			type='button'
			designType='primary'
			onClick={() =>onSaveClick}/> 
			</div>
		}
	
    </div>
	);
	};
