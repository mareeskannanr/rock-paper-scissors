import React, { Component } from 'react';

export default class ScoreBoard extends Component {

    render() {
        return (
            <div className="col">
                <h3 className="text-center">
                    <span style={{"color": "#007bff"}} className={`fas ${this.props.option === 'Player' ? 'fa-user' : 'fa-desktop'}`}></span>&nbsp;&nbsp;&nbsp;
                    <span className="badge badge-dark" style={{ "fontSize": "25px"}}>
                        {this.props.score.player} : {this.props.score.computer}
                    </span>&nbsp;&nbsp;&nbsp;
                    <span style={{"color": "#ffc107"}} className="fas fa-server"></span>
                </h3>
            </div>
        );
    }

}