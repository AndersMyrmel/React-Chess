import React, { useState } from 'react';
import Input from '@mui/material/Input';
import '../App.css';

export const InputFen = () => {
	const [fields, setFields] = useState(['']);
	const [count, setCount] = useState(1);

	const handleChange = (i, event) => {
		const values = [...fields];
		values[i] = event.target.value;
		setFields(values);
	};

	const handleAdd = () => {
		if (count > 9) {
			alert('Max ten entries');
			return;
		}
		const values = [...fields];
		values.push('');
		setFields(values);
		setCount(count + 1);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		console.log(fields);
	};

	return (
		<div>
			<div id="inputText">
				<h1 id="inputHeader">Create your own puzzle streak!</h1>
				<p>
					Paste FEN notations in the format: 8/8/8/4p1K1/2k1P3/8/8/8 b - - 0 1
					to get started.
				</p>

				<p>
					Click add to increase the number of input fields, and submit when you
					are satisfied with the number of puzzles.
				</p>
				<p>
					Make sure it's the notation for the starting layout of the puzzle.
				</p>
			</div>

			<div className="inputContainer">
				<form onSubmit={submitHandler}>
					{fields.map((field, idx) => {
						return (
							<div className="form-inline" key={`${idx}`}>
								<Input
									placeholder="Enter FEN"
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
		</div>
	);
};

const inputStyle = {
	width: 800,
	bottom: 50,
	color: 'white',
};
