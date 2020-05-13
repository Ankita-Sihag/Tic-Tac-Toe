import React, { Component } from 'react';
import './result.css'


class Result extends Component {

    newGame = () =>
    {
        let result_div = document.getElementsByClassName("result-div")[0];
        result_div.style.display = "none";

        
    }

    render() {
        return (
            <div className="result-div">
                <div className="result-text">
                    Draw
                </div>
                <button className="replay-button" onClick={this.newGame}>Replay!</button>
            </div>
        );
    }
}

export default Result;