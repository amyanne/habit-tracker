import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addHabit } from '../actions';



export class HabitNew extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
        }
    }

    

    handleChange = (e) => {
        this.setState({
           [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addHabit(this.state)
        this.props.history.push('/habit_objects');
        
        
        
    }

    render() { 
        return(
        <form onSubmit={this.handleSubmit}>
            <h2>Add a Habit!</h2>
            <div className="input-field">
                <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} />
                <label htmlFor="name">Habit</label>
            </div>
            
            <input type="submit" value="Add a Habit!" className="btn indigo ligthen-2" />
        </form>
    )
    }

}
const mapDispatchToProps = dispatch => {
    return {
        addHabit: habit => dispatch(addHabit(habit))
    }
}

export default connect(null, mapDispatchToProps)(HabitNew);