import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { routeChange } from '../Services/routeChange.js';

export const HomeComponent = () => {
	let navigate = useNavigate();

	return (
		<div id="background">
			<div id="topRow">
				<Box
					sx={{
						display: 'flex',
						flexWrap: 'row',
						'& > :not(style)': {
							width: 1200,
							height: 600,
							borderRadius: 1,
						},
						'&:hover': {
							border: '2px solid #15e577',
							transitionDuration: '0.1s',
							borderRadius: 1,
						},
					}}
				>
					<Paper
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							backgroundColor: '#2e2e2e',
						}}
						children={
							<div id="topRowChildren">
								<h1 id="customStreakText">Custom Streak</h1>
								<h2 id="createYourOwnText">Create your own puzzle streak</h2>
								<h1 id="playText">Play </h1>
								<h1 id="arrowSymbol">➜</h1>
								<img
									id="boardIllustration"
									src={require('../images/board_illustration.png')}
								></img>
							</div>
						}
						onClick={() => {
							routeChange(navigate, `/input-fen`);
						}}
						elevation={6}
					/>
				</Box>
			</div>
			<div id="bottomRow">
				<Box
					sx={{
						display: 'flex',
						flexWrap: 'row',
						'& > :not(style)': {
							m: 1,
							width: 590,
							height: 400,
						},
					}}
				>
					<Paper elevation={6} />
					<Paper style={{ backgroundColor: '#2e2e2e' }} elevation={12} />
				</Box>
			</div>
		</div>
	);
};
