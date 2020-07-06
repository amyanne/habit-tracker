import React, { Component } from 'react'
import moment from 'moment'

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

    return week
  }

  // startDate = () => {
  //   let dateObject = this.state.dateObject;
  //   let startDate = moment(dateObject).subtract(3, 'days').format("MMM Do");  
  
  //   return startDate ;

  // }

  // nextDay = () => {
  //   let dateObject = this.state.dateContext;
  //   let nextDay = moment(dateObject).add(1, 'days').format("MMM Do");

  //   return nextDay ; 
  // }


  // createWeek = () => {
  //   let week = [];
  //   let day = this.startDate()
  //   for (let d = 0; d <= 6; d++) {
  //     week.push(
  //       <td key={d} className="calendar-day">
  //         {day} 
  //       </td>
  //     );
  //     day = moment(day).add(1, 'days').format("MMM Do");
  //     debugger;
  // }
  //   return (
  //     week
  //   )
  // }
    
      renderHeader() {
        let week = this.createWeek()


        return (
          <div className="card">  
              {week}
          </div>
          
         
        )
      }
    
      renderDays() {}
    
      renderCells() {}
    
      onDateClick = day => {};
    
      nextMonth = () => {};
    
      prevMonth = () => {};
    
      render() {
        return (
          <div className="calendar">
            {this.renderHeader()}
            {this.renderDays()}
            {this.renderCells()}
          </div>
        );
      }
    }

export default Calendar