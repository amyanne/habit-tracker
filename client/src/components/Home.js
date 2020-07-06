import React, { Component } from 'react';
import Calendar from "../containers/Calendar";


export class Home extends Component {
    render() {
        return(
            <div>
                <h1>Habit Tracker!</h1>
                <Calendar />
            </div>
        )
    }
}

export default Home;