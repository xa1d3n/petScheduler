import React from "react"
import PropTypes from "prop-types"
import { DragDropContainer } from 'react-drag-drop-container';


const Appointment = ({ appointment }) => {
  const { id, pet } = appointment;
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
  pet: PropTypes.shape({ name: PropTypes.string, type: PropTypes.string }).isRequired,
};
export default Appointment
