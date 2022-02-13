import React from "react"
import PropTypes from "prop-types"

const Pet = ({ pet }) => {
  const getImage = () => {
    try {
      const image = require(`../../assets/images/${pet?.type}`);
  
      if (!image) return null;
      return <img src={image} />;
    } catch (error) {
      console.log(`Image with name "${pet?.type}" does not exist`);
      return null;
    }
  }

  return (
    <div className="pet">
      {getImage()}
      <div>{pet?.name}</div>
    </div>
  );
}

Pet.propTypes = {
  pet: PropTypes.shape({ name: PropTypes.string, type: PropTypes.string }).isRequired,
};
export default Pet
