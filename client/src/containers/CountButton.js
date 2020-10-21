import React, { Component } from 'react';

export class CountButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            habitName: props,
            completedOn: props

        }
    }


    increaseCount = count => {
        let newCount = this.state.count + 1
        this.setState({
            count: newCount
        })
        return newCount 
    }


    render() {

        let count = this.increaseCount
        return(
        <button onClick={this.increaseCount}>Like {this.state.count} </button>
        )
    }

    

    

}

export default CountButton;