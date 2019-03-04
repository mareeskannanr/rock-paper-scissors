import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';
import Alert from './components/Alert';
import ScoreBoard from './components/ScoreBoard';
import Choices from './components/Choices';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Header renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Footer renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Alert - Player Win Scenario', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Alert message="Scissors beats Paper" />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Alert - Player Loosing Scenario', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Alert message="Rock loses to Paper" />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Display Score Board', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ScoreBoard option="Player" score={{"player":1, "computer":2}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Render Choices Component without Crash', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Choices data={{"option": "Player", "score": {"player":1, "computer":2}}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});