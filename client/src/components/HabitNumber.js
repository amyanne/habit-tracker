import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { getHabits } from '../actions/index';

export class HabitNumber extends Component {
    componentDidMount() {
        this.props.getHabits();
    }
    render() {
        let habitNum = this.props.habits

        debugger;


        return habitNum
    }
  }
  
  const mapStateToProps = state => {
    return {
        habits: state.habitsReducer.habits
    }
}

export default connect(mapStateToProps, { getHabits })(HabitNumber);