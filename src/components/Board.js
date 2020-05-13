import React, { Component } from 'react';
import Cross from './Cross';
import Circle from './Circle';

var patterns = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]

class Board extends Component {

    constructor(props) {
        super(props);

        this.state = {
            players: "one",
            turn: 'X',
            value: [0,0,0,0,0,0,0,0,0],
            filled: 0
        };
        
        if(props.players === "two")
            this.state.players = "two";

        
    }

    componentDidMount = () => {
        let replay_button = document.getElementsByClassName("replay-button")[0];
        replay_button.addEventListener('click', this.clear);

    }
    

    displaySymbol = (index) => {

        let turn
        let value = [...this.state.value]

        if(value[index]===1 || value[index]===2)
            return;

        if(this.state.turn === 'X'){
            value[index] = 1
            turn = 'O'
        }
        else{
            value[index] = 2
            turn = 'X'
        }

        
    

        this.setState(prevState =>( {
            value: value,
            turn : turn,
            filled : prevState.filled + 1
        }), this.resultCheck);

        let curr_sq = document.getElementsByClassName("square")[index];
        curr_sq.style.cursor = "default";


    }
    
    hoverOnSymbol = (index) => {
        let value = [...this.state.value]

        if(value[index]===0)
        {
            if(this.state.turn==='X')
                value[index] = 3
            else    
                value[index] = 4

            this.setState({
               value :value
            })
        }
        
    }

    backToBlank = (index) => {
        let value = [...this.state.value]
        if(value[index]===3 || value[index]===4)
        {
            value[index] = 0
            this.setState({
                value: value
            })
        }
    }

    resultCheck = () => {
        let i
        let flag = false
        let value = [...this.state.value]
        for(i=0; i<8; i++){
            let x = patterns[i]
            
            let currVal = value[x[0]]
        
            if(value[x[1]]!==0 && value[x[2]]!==0 && value[x[1]]===currVal && value[x[2]]===currVal)
            {
                let winner = this.state.turn;
                if(this.state.turn === 'X')
                    winner = 'O'
                else    
                    winner = 'X'
                flag = true
                this.resultDisplay(winner + " wins !!");
                break;
            }
        }

        if(!flag && this.state.filled === 9)
            this.resultDisplay("Its a draw !!")
    }

    resultDisplay = (text) =>
    {
        let result_div = document.getElementsByClassName("result-div")[0];
        result_div.style.display = "flex";
        let result_text = document.getElementsByClassName("result-text")[0];
        result_text.innerHTML = text;
    }

    clear = () => {
        let value = [0,0,0,0,0,0,0,0,0]
        this.setState({
            value: value,
            turn: 'X',
            filled: 0
        })
        let sq = document.getElementsByClassName("square");
        let i;
        for( i=0; i<9; i++)
            sq[i].style.cursor="pointer"
       
        

    }


    render() {
        return (
            <div className="board">
                
                
                <div className="square" 
                    onMouseOver={() => this.hoverOnSymbol(0)}
                    onMouseLeave = {() => this.backToBlank(0)}
                    onClick={() => this.displaySymbol(0)}>
                        { 
                            this.state.value[0] === 1 ? <Cross hovered="false"/> : 
                            (this.state.value[0] === 2 ? <Circle hovered="false"/> :
                            (this.state.value[0] === 3 ? <Cross hovered="true"/> :
                            (this.state.value[0] === 4 ? <Circle hovered="true"/> : <div></div>)))
                        }
                </div>

                <div className="square" 
                    onMouseOver={() => this.hoverOnSymbol(1)}
                    onMouseLeave = {() => this.backToBlank(1)}
                    onClick={() => this.displaySymbol(1)}>
                        { 
                            this.state.value[1] === 1 ? <Cross hovered="false"/> : 
                            (this.state.value[1] === 2 ? <Circle hovered="false"/> :
                            (this.state.value[1] === 3 ? <Cross hovered="true"/> :
                            (this.state.value[1] === 4 ? <Circle hovered="true"/> : <div></div>)))
                        }
                </div>

                <div className="square" 
                    onMouseOver={() => this.hoverOnSymbol(2)}
                    onMouseLeave = {() => this.backToBlank(2)}
                    onClick={() => this.displaySymbol(2)}>
                        { 
                            this.state.value[2] === 1 ? <Cross hovered="false"/> : 
                            (this.state.value[2] === 2 ? <Circle hovered="false"/> :
                            (this.state.value[2] === 3 ? <Cross hovered="true"/> :
                            (this.state.value[2] === 4 ? <Circle hovered="true"/> : <div></div>)))
                        }
                </div>

                <div className="square" 
                    onMouseOver={() => this.hoverOnSymbol(3)}
                    onMouseLeave = {() => this.backToBlank(3)}
                    onClick={() => this.displaySymbol(3)}>
                        { 
                            this.state.value[3] === 1 ? <Cross hovered="false"/> : 
                            (this.state.value[3] === 2 ? <Circle hovered="false"/> :
                            (this.state.value[3] === 3 ? <Cross hovered="true"/> :
                            (this.state.value[3] === 4 ? <Circle hovered="true"/> : <div></div>)))
                        }
                </div>

                <div className="square" 
                    onMouseOver={() => this.hoverOnSymbol(4)}
                    onMouseLeave = {() => this.backToBlank(4)}
                    onClick={() => this.displaySymbol(4)}>
                        { 
                            this.state.value[4] === 1 ? <Cross hovered="false"/> : 
                            (this.state.value[4] === 2 ? <Circle hovered="false"/> :
                            (this.state.value[4] === 3 ? <Cross hovered="true"/> :
                            (this.state.value[4] === 4 ? <Circle hovered="true"/> : <div></div>)))
                        }
                </div>

                <div className="square" 
                    onMouseOver={() => this.hoverOnSymbol(5)}
                    onMouseLeave = {() => this.backToBlank(5)}
                    onClick={() => this.displaySymbol(5)}>
                        { 
                            this.state.value[5] === 1 ? <Cross hovered="false"/> : 
                            (this.state.value[5] === 2 ? <Circle hovered="false"/> :
                            (this.state.value[5] === 3 ? <Cross hovered="true"/> :
                            (this.state.value[5] === 4 ? <Circle hovered="true"/> : <div></div>)))
                        }
                </div>

                <div className="square" 
                    onMouseOver={() => this.hoverOnSymbol(6)}
                    onMouseLeave = {() => this.backToBlank(6)}
                    onClick={() => this.displaySymbol(6)}>
                        { 
                            this.state.value[6] === 1 ? <Cross hovered="false"/> : 
                            (this.state.value[6] === 2 ? <Circle hovered="false"/> :
                            (this.state.value[6] === 3 ? <Cross hovered="true"/> :
                            (this.state.value[6] === 4 ? <Circle hovered="true"/> : <div></div>)))
                        }
                </div>

                <div className="square" 
                    onMouseOver={() => this.hoverOnSymbol(7)}
                    onMouseLeave = {() => this.backToBlank(7)}
                    onClick={() => this.displaySymbol(7)}>
                        { 
                            this.state.value[7] === 1 ? <Cross hovered="false"/> : 
                            (this.state.value[7] === 2 ? <Circle hovered="false"/> :
                            (this.state.value[7] === 3 ? <Cross hovered="true"/> :
                            (this.state.value[7] === 4 ? <Circle hovered="true"/> : <div></div>)))
                        }
                </div>

                <div className="square" 
                    onMouseOver={() => this.hoverOnSymbol(8)}
                    onMouseLeave = {() => this.backToBlank(8)}
                    onClick={() => this.displaySymbol(8)}>
                        { 
                            this.state.value[8] === 1 ? <Cross hovered="false"/> : 
                            (this.state.value[8] === 2 ? <Circle hovered="false"/> :
                            (this.state.value[8] === 3 ? <Cross hovered="true"/> :
                            (this.state.value[8] === 4 ? <Circle hovered="true"/> : <div></div>)))
                        }
                </div>
                
                
            </div>
        );
    }
}

export default Board;