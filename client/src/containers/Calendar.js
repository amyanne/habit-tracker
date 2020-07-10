import React, { Component } from 'react'
import moment from 'moment'
// import HabitNumber from '../components/HabitNumber'
import HabitList from './HabitList'
// import CheckBox from './CheckBox'


export class Calendar extends Component {
    
  constructor() {
    super()
    this.state = {
      dateContext: moment(),
      today: moment(),
      selectedDay: null
    }
  }

  createWeek = () => {
    let dateObject = this.state.dateObject;
    let week = []
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
    // let habitNum = HabitNumber
    const totalSlots = []
    let rows = []
    let cells = []
    

    

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
      return <tr>{d}</tr>;
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
        return( 
         < HabitList />
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
            {this.renderHabits()}
            {this.renderCells()}
          </div>
        );
      }
    }

export default Calendar