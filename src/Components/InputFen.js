import React, { useState } from 'react';
import Input from '@mui/material/Input';
import '../App.css';

export const InputFen = () => {
	const [fields, setFields] = useState(['']);

	function handleChange(i, event) {
		const values = [...fields];
		values[i] = event.target.value;
		setFields(values);
	}

	function handleAdd() {
		const values = [...fields];
		values.push('');
		setFields(values);
	}

	const submitHandler = (event) => {
		event.preventDefault();
	};

	return (
		<div className="inputContainer">
			<form onSubmit={submitHandler}>
				{fields.map((field, idx) => {
					return (
						<div className="form-inline" key={`${idx}`}>
							<Input
								placeholder="Enter FEN notation"
								value={field || ''}
								sx={{
									':before': { borderBottomColor: 'white' },
									':after': { borderBottomColor: '#779556' },
								}}
								onChange={(e) => handleChange(idx, e)}
								style={inputStyle}
							/>
						</div>
					);
				})}
				<div className="button-section">
					<button id="addButton" onClick={() => handleAdd()}>
						Add
					</button>
					<button id="submitButton" type="submit">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

const inputStyle = {
	width: 800,
	bottom: 50,
	color: 'white',
};
