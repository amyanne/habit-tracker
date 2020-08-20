import React, { Component } from 'react';
import CheckBox from '../components/CheckBox';
import { connect } from 'react-redux';
import { addCompletedHabit } from '../actions/index';




class Checked extends Component {
  constructor(props) {
    super(props);

    this.state = {
       checked: false, 
       habitObjectId: props,
       completedOn: props
    }
}
// componentDidMount() {
//   debugger
//   this.props.getCompletedHabits();
// }



  handleCheckboxChange = event => {
    this.setState({ checked: event.target.checked })
  
      this.props.addCompletedHabit(this.props )
      //this.props.history.push('/completed_habits)');
      
      
  }

  
  

  render() {
    return (
      <div style={{ fontFamily: 'system-ui' }}>
        <label>
          <CheckBox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
          />
        </label>
      </div>
    )
  }
}



const mapStateToProps = state => {
  return {
      completedHabits: state.completedHabitsReducer.completedHabits
  }
}



export default connect(mapStateToProps, { addCompletedHabit })(Checked);