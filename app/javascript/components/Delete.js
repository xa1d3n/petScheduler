import React from "react"
import PropTypes from "prop-types"
const Delete = ({ id }) => {
  const handleDelete = ()

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
