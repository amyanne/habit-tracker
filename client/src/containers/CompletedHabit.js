import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { getCompletedHabits } from '../actions/index';

export class CompletedHabit extends Component {
    componentDidMount() {
        this.props.getCompletedHabits();
        console.log("@@@@@@@@@@@@@@@@@@@@")
        console.log(this.props)
    }

    render() {
        const habits = this.props.completedHabits


        console.log("!!!!")

        console.log(habits)

         
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
        completedHabits: state.completedHabitsReducer.completedhabits
    }
}

  

export default connect(mapStateToProps, { getCompletedHabits })(CompletedHabit);