import { useState } from 'react';
import './AccountTextBox.component.scss';
import { ButtonComponent } from '../button/Button.component';

interface AccountTextboxProps {
	id?: string;
	name?: string;
    value?:string;
	inputtype?: string;
	onSave: () => void;
}





export const AccountTextBox = ({ id, name, value, onSave, inputtype }: AccountTextboxProps) => {
	const [isInput, setIsInput] = useState(0);
	const [inputValue, setInputValue] = useState(value);
	const [DisplayValue, setDisplayValue] = useState(inputValue);

	const onInputClick = () => {
		setIsInput(1);
		setDisplayValue(inputValue);
		console.log(inputValue)
	};

	const onSaveClick = () => {
		setInputValue(DisplayValue);
		setIsInput(0);
		onSave();
		console.log(inputValue)
	}


	
    return (<div className='account-textbox'>
        <div className="textbox-name">{name}</div>
		{isInput===0 ? (
			<div
			key={id}
			className='account-information'
			onClick={() =>onInputClick()}
		>
			<div className='textbox-value'>{inputValue}</div>
		</div>)
		:
			<div>
				
			<input
			id={id}
			key={id}
			type= {inputtype? inputtype : 'text'}
			value={DisplayValue}
			className='account-information'
			autoFocus
			onChange={(e) => setDisplayValue(e.target.value)}
			/>
			
			<ButtonComponent 
			children="sauvegarder"
			key={id}
			type='button'
			designType='primary'
			onClick={() =>onSaveClick()}/> 

			<ButtonComponent 
			children="annuler"
			key={id}
			type='button'
			designType='secondary'
			onClick={() =>setIsInput(0)}/> 
			</div>
		}
	
    </div>
	);
	};
