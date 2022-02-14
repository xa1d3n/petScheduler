import React from "react"
import PropTypes from "prop-types"
import { DragDropContainer } from 'react-drag-drop-container';


const Appointment = ({ appointment }) => {
  const { pet } = appointment;
  const getImage = () => {
    try {
      const image = require(`../../assets/images/${pet?.type}`);

      if (!image) return null;
      return <img src={image} />;
    } catch (error) {
      console.log(`Image with name "${pet?.type}" does not exist`);
      return null;
    }
  };

  return (
    <DragDropContainer targetKey="pet" dragData={appointment}>
      <div className="pet">
        {getImage()}
        <div>{pet?.name}</div>
      </div>
    </DragDropContainer>
  );
};

Appointment.propTypes = {
  appointment: PropTypes.shape({
    id: PropTypes.number,
    type: PropTypes.string,
    pet: PropTypes.shape({ name: PropTypes.string, type: PropTypes.string })
      .isRequired,
  }).isRequired,
};
export default Appointment
