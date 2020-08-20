import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { getCompletedHabits } from '../actions/index';

export class CompletedHabit extends Component {
    componentDidMount() {
        this.props.getCompletedHabits();
    }


    sortByDate() {
        const habits = this.props.completedHabits
        let sorted = habits.sort((a, b) => a.completed_on - b.completed_on)
       


        return sorted
    }


    render() {
        let habits = this.sortByDate()
        


        let habitList = habits.map((habit, i) => {
            return( <div key={i} className="finished-colomn">
            <div>
                {habit.habit_name}
                </div>
                <div>
                      
                {habit.completed_on}
           </div>
          </div>
        );
      });

        
        return habitList
        
        
    }
}



const mapStateToProps = state => {
    return {
        completedHabits: state.completedHabitsReducer.completedHabits
    }
}

  

export default connect(mapStateToProps, { getCompletedHabits })(CompletedHabit);