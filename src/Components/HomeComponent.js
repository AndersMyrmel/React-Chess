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
			<div className="titleSection">
				<div className="titleRight">
					<h1 id="mainText">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit
					</h1>
					<p id="secondaryText">
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque laudantium
					</p>
				</div>
				<div className="titleRight">
					<img
						id="transparentIllustration"
						alt="Chess board illustration"
						src={require('../images/transparent_board.png')}
					></img>
				</div>
			</div>
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
								<p id="createYourOwnText">Create your own puzzle streak</p>
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
								<h1 id="chessVisionText">Guess The Elo</h1>
								<img
									id="bottomLeftIllustration"
									alt="Chess pieces illustration"
									src={require('../images/green_mobile.png')}
								></img>
							</div>
						}
						onClick={() => {
							routeChange(navigate, `/guess-the-elo`);
						}}
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
								<h1 id="playLozzaText">Play Lozza</h1>
								<img
									id="bottomRightIllustration"
									alt="Chess game illustration"
									src={require('../images/board_mobile.png')}
								></img>
							</div>
						}
						onClick={() => {
							routeChange(navigate, `/guess`);
						}}
						elevation={6}
					/>
				</Box>
			</div>
		</div>
	);
};
