import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { routeChange } from '../Services/routeChange.js';
import { Header } from '../Components/Header.js';
import '../Styles/HomePage.css';

export const HomeComponent = () => {
	let navigate = useNavigate();

	return (
		<div className="background">
			<Header />
			<div id="topRow">
				<Box
					sx={{
						display: 'flex',
						flexWrap: 'row',
						border: '3px solid transparent',
						'& > :not(style)': {
							width: 1200,
							height: 600,
							borderRadius: 1,
						},
						'&:hover': {
							borderColor: '#15e577',
							transitionDuration: '0.1s',
							borderRadius: 1,
							cursor: 'pointer',
						},
					}}
				>
					<Paper
						style={{
							backgroundColor: '#2e2e2e',
						}}
						children={
							<div className="paperChildren">
								<h1 id="customStreakText">Custom Streak</h1>
								<h2 id="createYourOwnText">Create your own puzzle streak</h2>
								<h1 id="playText">Play </h1>
								<h1 id="arrowSymbol">➜</h1>
								<img
									id="boardIllustration"
									alt="Chess board illustration"
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
						border: '2px solid transparent',
						'& > :not(style)': {
							width: 590,
							height: 420,
							borderRadius: 1,
						},
						'&:hover': {
							borderColor: '#15e577',
							transitionDuration: '0.1s',
							borderRadius: 1,
							cursor: 'pointer',
						},
					}}
				>
					<Paper
						style={{
							backgroundColor: '#2e2e2e',
						}}
						children={
							<div className="paperChildren">
								<h1 id="chessVisionText">Chess Vision</h1>
								<img
									id="bottomLeftIllustration"
									alt="Chess pieces illustration"
									src={require('../images/green_mobile.png')}
								></img>
							</div>
						}
						elevation={6}
					/>
				</Box>
				<Box
					sx={{
						display: 'flex',
						flexWrap: 'row',
						border: '2px solid transparent',
						'& > :not(style)': {
							width: 590,
							height: 420,
							borderRadius: 1,
						},
						'&:hover': {
							borderColor: '#15e577',
							transitionDuration: '0.1s',
							borderRadius: 1,
							cursor: 'pointer',
						},
					}}
				>
					<Paper
						style={{
							backgroundColor: '#2e2e2e',
						}}
						children={
							<div className="paperChildren">
								<h1 id="forceMateText">Forced Mate</h1>
								<img
									id="bottomRightIllustration"
									alt="Chess game illustration"
									src={require('../images/board_mobile.png')}
								></img>
							</div>
						}
						elevation={6}
					/>
				</Box>
			</div>
		</div>
	);
};
