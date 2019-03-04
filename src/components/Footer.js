import React, { Component } from 'react';

export default class Footer extends Component {

    restart() {
        this.props.reset();
    }

    end() {
        this.props.finish();
    }

    render() {
        return (
            <div className="col text-center">
                <button type="button" className="btn btn-success" onClick={() => this.restart()}>
                    <span className="fas fa-redo"></span> Restart
                </button>&nbsp;&nbsp;
                <button type="button" className="btn btn-danger" onClick={() => this.end()}>
                    <span className="fas fa-hourglass-end"></span> End
                </button>
            </div>
        );
    }

}