import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import ScoreBoard from './components/ScoreBoard';
import Alert from './components/Alert';
import Choices from './components/Choices';
import Footer from './components/Footer';

class App extends Component {

  state = {
    option: '',
    score: {
      computer: 0,
      player: 0
    },
    message: '',
    matchResult: '',
    timeOutArray: []
  };

  resultIcon = '';
  matchResult = '';

  componentDidMount() {
    if(localStorage.getItem("appState")) {
      this.setState({...JSON.parse(localStorage.getItem("appState"))});
    }
  }

  storeState() {
    localStorage.setItem("appState", JSON.stringify(this.state));
  }

  setOption(option) {
    this.setState({option, matchResult: ''}, () => this.storeState());

    //After one hour game will automatically finish (Additional One)
    let timeOut = setTimeout(this.finishGame.bind(this), 1000 * 60 * 1);
    this.addTimeOut(timeOut);
  }

  resetGame() {
    if(this.state.timeOutArray.length > 0) {
      for(let timeOut of this.state.timeOutArray) {
        clearTimeout(timeOut);
      }
    }
    this.setState({
      option: '',
      score: {
        computer: 0,
        player: 0
      },
      message: '',
      timeOutArray: []
    }, () => this.storeState());
  }

  updateScore(scoreInfo) {
    this.setState({
      score: {
        computer: scoreInfo.computer,
        player: scoreInfo.player
      },
      message: scoreInfo.message
    }, () => this.storeState());
  }

  finishGame() {
    this.resultIcon = "";
    let message = `Match Drawn, Cheers!`;
    let {computer, player} = this.state.score;
    let object = this.state.option === 'Player' ? 'You' : 'Computer';
    if(player > computer) {
      message = `Congratualtions, ${object} Won!`;
      this.resultIcon = "fas fa-trophy";
    } else if(player < computer) {
      message = `${object} Lost, Better Luck Next Time!`;
    }

    this.matchResult = message;
    this.resetGame();
  }

  addTimeOut(timeOut) {
    let timeOutArray = this.state.timeOutArray;
    timeOutArray.push(timeOut)
    this.setState({timeOutArray}, () => this.storeState());
  }

  render() {
    return (
      <div className="card mt-10">
        <div className="card-header text-center">
          <Header/>
        </div>
        <div className="card-body">
          { this.state.option && <div>
              <div className="col">
                <ScoreBoard option={this.state.option} score={this.state.score}/>
              </div> 
              {
                this.state.message && <div className="col">
                  <Alert message={this.state.message} />
                </div>
              }
              <div className="col">
                <Choices data={{option : this.state.option, score: this.state.score}} updateScore={scoreInfo => this.updateScore(scoreInfo)} addTimeOut={timeOut => this.addTimeOut(timeOut)} />
              </div>
              <div className="card-footer text-muted">
                <Footer reset={() => { this.matchResult = ''; this.resetGame(); }} finish={() => this.finishGame()} />
              </div>
            </div>
          }
          { !this.state.option && 
              <div>
                {this.matchResult && <div className="col text-center">
                  <div className="alert alert-warning">
                    <b><span className={this.resultIcon}></span>  {this.matchResult}</b>
                  </div>
                </div>}
                <div className="col text-center">
                  <button type="button" className="btn btn-primary" onClick={() => this.setOption('Player')}>
                    <span className="fas fa-user"></span> Player
                  </button>&nbsp;&nbsp;&nbsp;
                  <button type="button" className="btn btn-info" onClick={() => this.setOption('Computer')}>
                    <span className="fas fa-desktop"></span> Computer
                  </button>
                </div>
              </div>
              
          }
      </div>
    </div>  
    );
  }
}

export default App;
