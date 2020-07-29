import React, { Component } from 'react';
import CheckBox from '../components/CheckBox';


class Checked extends Component {
  state = { checked: false }

  handleCheckboxChange = event => {
    this.setState({ checked: event.target.checked })
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



  export default Checked