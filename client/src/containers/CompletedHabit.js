import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { getCompletedHabits } from '../actions/index';

export class CompletedHabit extends Component {
    componentDidMount() {
        this.props.getCompletedHabits();
    }

    

    render() {
        
        const habits = this.props.completedHabits.map((habit, i) => {
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

      console.log(this.props.completedHabits)
        
        return habits
        
        
    }
}



const mapStateToProps = state => {
    return {
        completedHabits: state.completedHabitsReducer.completedHabits
    }
}

  

export default connect(mapStateToProps, { getCompletedHabits })(CompletedHabit);