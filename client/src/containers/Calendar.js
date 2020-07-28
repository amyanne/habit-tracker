import React, { Component } from 'react'
import moment from 'moment'
import HabitItem from '../components/HabitItem';
import CheckBox from './CheckBox'
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

    

    let weekdays = week.map(day => {
      return (
        <th key={day} className="week-day">
         {day}
        </th>
      );
    });

    return weekdays
  }

  

  createMatrix = () => {
    let week = this.createWeek()
    const habits = this.props.habits
    const totalSlots = []
    let rows = []
    let placeHolder = []
    let cells = [7]

    // habits.forEach((habit, i) => {
    //  let row = []
    //  //row.push(<HabitItem key={i} habit={habit} />)
    //  row.push(habit)
    //  let j = 0;
    // while (j < 7) {
    //   row.push(< CheckBox />)
    //   i++
    // }
    // //placeHolder.push(row)
     
    // });
    
    

    totalSlots.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row); // if index not equal 7 that means not go to next week
      } else {
        rows.push(cells); // when reach next week we contain all td in last week to rows 
        cells = []; // empty container 
        cells.push(row); // in current loop we still push current row to new container
      }
      if (i === totalSlots.length - 1) { // when end loop we add remain date
        rows.push(cells);
      }
    });

    let habitRows = rows.map((d, i) => {
      return <tr> < CheckBox /> </tr>;
    });

    return (
      <table className="calendar-day">
            <thead>
              <tr>{week}</tr>
            </thead>
            <tbody>{habitRows}</tbody>
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
    
      renderHabits() {
        
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
            {this.renderHabits()}
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