import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import HabitItem from '../components/HabitItem';

import { getHabits } from '../actions/index';

export class HabitCalendar extends Component {
    componentDidMount() {
        this.props.getHabits();
    }

    render() {
        const habits = this.props.habits.map((habit, i) => <HabitItem key={i} habit={habit} />)
        return (
            <div>
                <h2>Habit Calendar</h2>
                <ul className="collection">
                    {habits}
                </ul>
            </div>
        )
    }
}



const mapStateToProps = state => {
    return {
        habits: state.habitsReducer.habits
    }
}

export default connect(mapStateToProps, { getHabits })(HabitCalendar);