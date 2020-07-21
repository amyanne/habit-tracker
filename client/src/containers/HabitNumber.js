import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { getHabits } from '../actions/index';

export class HabitNumber extends Component {
    componentDidMount() {
        this.props.getHabits();
        debugger;
    }
    getNumber = () => {
        debugger;
        let habitNum = this.props.habits.length 

        debugger;


        return habitNum
    }


    render() {
        let num = this.getNumber

        debugger;


        return num
    }
  }
  
  export default HabitNumber