import React, { useContext, useState } from 'react';
import Input from '@mui/material/Input';
import { useNavigate } from 'react-router-dom';
import { routeChange } from '../Services/routeChange.js';
import { FenContext } from '../Context/FenContext.js';
import { Header } from '../Components/Header.js';
import '../Styles/App.css';

export const InputFen = ({ setFenList }) => {
	const [fields, setFields] = useState(['']); // Input field string array state
	const [count, setCount] = useState(1); // Counter for restricting max input fields to 10
	let navigate = useNavigate();

	const handleChange = (i, event) => {
		const values = [...fields];
		values[i] = event.target.value;
		setFields(values);
	};

	const handleAdd = () => {
		if (count > 9) {
			return alert('Max ten entries');
		}
		const values = [...fields];
		values.push('');
		setFields(values);
		setCount(count + 1);
	};

	// On Submit button click
	const handleSubmit = () => {
		setFenList(fields); // Set fenContext equal to input fields
		routeChange(navigate, `/custom-streak`); // Redirect page to Custom streak puzzle site
	};

	// Update form
	const formHandler = (event) => {
		event.preventDefault();
	};

	return (
		<div className="background">
			<Header />
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
					Make sure the notation represents the starting layout of the puzzle.
				</p>
			</div>
			<div id="inputContainer">
				<form onSubmit={formHandler}>
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
									style={{ width: 800, bottom: 50, color: 'white', padding: 5 }}
								/>
							</div>
						);
					})}
					<div id="button-section">
						<button id="addButton" type="button" onClick={() => handleAdd()}>
							Add
						</button>
						<button
							id="submitButton"
							type="button"
							onClick={() => handleSubmit()}
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
