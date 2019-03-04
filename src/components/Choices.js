import React, { Component } from 'react';

export default class Choices extends Component {

    state = {
        computer: 0,
        player: 0,
        message: ''
    };

    timeOut = '';

    componentDidMount() {
        let data = this.props.data;
        this.setState({
            computer: data.score.computer,
            player: data.score.player
        });
        if(this.props.data.option === "Computer") {
            let choice = this.generateRandomOption();
            this.click(choice);
        }
    }

    click(choice) {
        this.refs[choice].style.color = "#007bff";
        let timeOut = setTimeout(() => {
            this.computerClick(choice);
        }, 150);
        this.props.addTimeOut(timeOut);
    }

    computerClick(choice) {
        let computerChoice = this.generateRandomOption();
        this.refs[choice].style.color = "";
        this.refs[computerChoice].style.color = "#ffc107";
        let timeOut = setTimeout(() => {
            this.getResult(choice, computerChoice);
        }, 150);
        this.props.addTimeOut(timeOut);
    }

    getResult(playerChoice, computerChoice) {
        let choice = playerChoice + "_" + computerChoice;
        let message = '';
        switch(choice) {
            case "Rock_Scissors":
            case "Paper_Rock":
            case "Scissors_Paper":
                message = `${playerChoice} beats ${computerChoice}`;
                this.setState({player: this.state.player + 1 , message});
                this.props.updateScore(this.state);
                break;
            case "Rock_Paper":
            case "Paper_Scissors":
            case "Scissors_Rocks":
                message = `${playerChoice} loses to ${computerChoice}`;
                this.setState({computer: this.state.computer + 1, message });
                this.props.updateScore(this.state);
                break;
            default:
                message = `It's a Draw` ;
                this.setState({ message });
                this.props.updateScore(this.state);
        }

        this.refs[computerChoice].style.color = "";
        if(this.props.data.option === "Computer") {
            let timeOut = setTimeout(() => {
                let choice = this.generateRandomOption();
                this.click(choice);
            }, 1000);
            this.props.addTimeOut(timeOut);
        }
    }

    generateRandomOption() {
        const options = ['Rock', 'Paper', 'Scissors'];
        let random = Math.floor(Math.random() * 3);
        return options[random];
    }

    render() {
        let option = this.props.data.option;
        return (
            <p className="text-center">
                <span className="choice-padding" onClick={() => option === "Player" && this.click('Rock')} ref='Rock'>
                    <span className="fas fa-4x fa-hand-rock choice"></span>
                </span>
                <span className="choice-padding" onClick={() => option === "Player" && this.click('Paper')} ref='Paper'>
                    <span className="fas fa-4x fa-hand-paper choice"></span>
                </span>
                <span className="choice-padding" onClick={() => option === "Player" && this.click('Scissors')} ref='Scissors'>
                    <span className="fas fa-4x fa-hand-scissors choice"></span>
                </span>
            </p>
        );
    }

}