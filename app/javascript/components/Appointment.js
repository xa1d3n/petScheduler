import React from "react"
import PropTypes from "prop-types"
class Appointment extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
      </React.Fragment>
    );
  }
}

Appointment.propTypes = {
  greeting: PropTypes.string
};
export default Appointment
