import React from "react"
import PropTypes from "prop-types"
const Delete = ({ id }) => {

  return (
    <React.Fragment>
      Greeting: {this.props.greeting}
    </React.Fragment>
  );
}

Delete.propTypes = {
  greeting: PropTypes.number
};
export default Delete
