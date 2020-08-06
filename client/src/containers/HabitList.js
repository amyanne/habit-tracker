import React, { Component } from 'react'; 
import { connect } from 'react-redux';

import { getHabits } from '../actions/index';

export const habitName = () => {
        let habits = this.props.getHabits();
        


        return habits
        
    }

   

    




const mapStateToProps = state => {
    return {
        habits: state.habitsReducer.habits
    }
}

  

export default connect(mapStateToProps, { getHabits })(habitName);