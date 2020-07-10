import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import HabitItem from '../components/HabitItem';

import { getHabits } from '../actions/index';

export class HabitList extends Component {
    componentDidMount() {
        this.props.getHabits();
    }

    habitNumber = () => {
        let habitNum = this.props.habits.length 


        return habitNum
    }

    render() {
        const habits = this.props.habits.map((habit, i) => <HabitItem key={i} habit={habit} />)
        
        return (
            <div>
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

export default connect(mapStateToProps, { getHabits })(HabitList);