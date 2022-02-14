import React from 'react';
import PropTypes from 'prop-types';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DropTarget } from 'react-drag-drop-container';

const Delete = ({ onDeleteAppointment }) => {
  const handleDelete = (e) => {
    const { id } = e?.dragData;
    const csrf = document
      .querySelector("meta[name='csrf-token']")
      .getAttribute('content');

    fetch('/api/destroy', {
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify({ id }),
      headers: {
        'content-type': 'application/json',
        'X-CSRF-Token': csrf,
      },
    }).then(() => onDeleteAppointment(e?.dragData));
  };

  return (
    <>
      <span className="deleteText">Delete</span>
      <div className="delete">
        <DropTarget targetKey="pet" onHit={handleDelete}>
          <FontAwesomeIcon icon={faTrash} size="6x" />
        </DropTarget>
      </div>
    </>
  );
};

Delete.propTypes = {
  greeting: PropTypes.number,
};
export default Delete;
