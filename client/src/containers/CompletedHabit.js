import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { getCompletedHabits } from '../actions/index';


export class CompletedHabit extends Component {
    componentDidMount() {
        this.props.getCompletedHabits();
    }




    render() {
        let habits = this.props.completedHabits
        let row = []
        let col = []
        habits.sort((a, b) => a.completed_on> b.completed_on ? 1 : -1)
        .map((habit, i) => {
            
            row.push(habit.completed_on)
            col.push({
                date: habit.completed_on,
                habit: habit.habit_name
              });
      });
        let uniqueRow = Array.from(new Set(row))

      let finalArray = []
        uniqueRow.forEach((day, i) => {
            let currentHabits = []
            currentHabits.push(day)
            currentHabits.push(": ")
            for(let i = 0; i < col.length; i++){
                let currentElement = col[i]

                if (currentElement.date === day){
                     currentHabits.push(currentElement.habit) 
                     currentHabits.push(" ")
                }
            }
            finalArray.push(currentHabits)
        })

        // week.forEach((day, i) => {
        //     let row = []
        //     row.push(day)
        //     for(let i = 0; i < habits.length - 1; i++){
        //       let col = < Checked
        //       habitObjectId={i+1}
        //       completedOn={day}
        //        />
        //        row.push(col)
             
        //     }
        //    weekArray.push(row)
            
        //    });
        
        let finishedColumns = finalArray.map((element, i) => {
            return (
                <div key={i} className="finished-colomn">
                 {element}
                </div>
              );
            });
        

        
        return (
            <table className="calendar-day">
                <h1> Completed Habits! </h1>
                  <tbody>{finishedColumns}</tbody>
                </table>
          )
            
        
        
    }
}



const mapStateToProps = state => {
    return {
        completedHabits: state.completedHabitsReducer.completedHabits
    }
}

  

export default connect(mapStateToProps, { getCompletedHabits })(CompletedHabit);