import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { getCompletedHabits } from '../actions/index';

export class CompletedHabit extends Component {
    componentDidMount() {
        this.props.getCompletedHabits();

        console.log("@@@@@@@@@@@@@@@@@@@@")
        console.log(this.props.getCompletedHabits())
    }

    render() {
        


        console.log("!!!!")

        console.log(this.props.completedHabits)

         
        return (
            <div>
                <ul className="collection">
                </ul>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        completedHabits: state.completedHabitsReducer.completedHabits
    }
}

  

export default connect(mapStateToProps, { getCompletedHabits })(CompletedHabit);