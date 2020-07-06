import React, { Component } from 'react'
import moment from 'moment'

export class Calendar extends Component {
    
  constructor() {
    super()
    this.state = {
      dateObject: moment()
    }
  }

  createDate = () => {
    let dateObject = this.state.dateObject;
    let startDate = moment(dateObject).subtract(3, 'days').format("MMM Do");  ;
  
    return startDate ;

  }

  createWeek = () => {
    let week = [];
    let day = this.createDate()
    for (let d = 0; d <= 6; d++) {
      week.push(
        <td key={d} className="calendar-day">
          {day} 
        </td>
      );
     
    }
    return (
      week
    )
}
    
      renderHeader() {
        let date = this.createDate()
        let week = this.createWeek()


        return (
          <div className="card">
              { date }  
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