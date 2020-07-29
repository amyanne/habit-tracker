import React, { Component } from 'react'
import moment from 'moment'
import HabitItem from '../components/HabitItem';
import Checked from './Checked'
import { getHabits } from '../actions/index';
import { connect } from 'react-redux';


export class Calendar extends Component {
    
  constructor(props) {
    super(props)
    

    this.state = {
      dateContext: moment(),
      today: moment(),
      selectedDay: null,
      habits: null
    }
  }

  componentDidMount() {
    this.props.getHabits();
}



  createWeek = () => {
    let dateObject = this.state.dateObject;
    let week = []
    // for i = -3; i < 3; i++ {
    //   week.push(moment(dateObject).add(i, 'days').format("MMM Do"));
    // }
    let startDate = moment(dateObject).subtract(3, 'days').format("MMM Do");  
    let secondDate = moment(dateObject).subtract(2, 'days').format("MMM Do");  
    let thirdDate = moment(dateObject).subtract(1, 'days').format("MMM Do"); 
    let fourthDate = moment(dateObject).format("MMM Do"); 
    let fifthDate = moment(dateObject).add(1, 'days').format("MMM Do");
    let sixthDate = moment(dateObject).add(2, 'days').format("MMM Do");
    let seventhDate = moment(dateObject).add(3, 'days').format("MMM Do");
    week.push(startDate, secondDate, thirdDate, fourthDate, fifthDate, sixthDate, seventhDate)


    return week
  }

  

  createMatrix = () => {
    let week = this.createWeek()
    let habits = this.props.habits.map((habit, i) => <HabitItem key={i} habit={habit} />)
    let weekArray = []
    habits.unshift("Habits")
    weekArray.push(habits)

    week.forEach((day, i) => {
     let row = []
     
     row.push(day)
     for(let i = 0; i < habits.length - 1; i++){
       let col = < Checked />
        row.push(col)
      
     }
    weekArray.push(row)
     
    });

    

    let finishedColumn = weekArray.map((check, i) => {
      return (
        <th key={i} className="finished-colomn">
          <tr>
         {check}
         </tr>
        </th>
      );
    });
   
     


    return (
      <table className="calendar-day">
            <tbody>{finishedColumn}</tbody>
          </table>
    )

  }


    
      renderHeader() {
        let matrix = this.createMatrix()


        return (

          <div className="card">  
          <h2>Habit Calendar</h2>
              {matrix}
          </div>
          
         
        )
      }
    
      

    
      renderCells() {

      }
    
      onDateClick = day => {};
    
      nextMonth = () => {};
    
      prevMonth = () => {};
    
      render() {
        return (
          <div className="calendar">
            {this.renderHeader()}
            {this.renderCells()}
          </div>
        );
      }
    }

    const mapStateToProps = state => {
      return {
          habits: state.habitsReducer.habits
      }
  }
  
    
  
  export default connect(mapStateToProps, { getHabits })(Calendar);