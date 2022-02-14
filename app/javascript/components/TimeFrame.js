import React from 'react';
import PropTypes from 'prop-types';
import Appointment from './Appointment';
import { DropTarget } from 'react-drag-drop-container';

const Delete = ({ appointments, time, onMoveAppointment }) => {
  const handleMoveAppointment = (e) => {
    const csrf = document
      .querySelector("meta[name='csrf-token']")
      .getAttribute('content');
    const { id } = e?.dragData;
    fetch('/api/move', {
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify({ appointment_id: id, time }),
      headers: {
        'content-type': 'application/json',
        'X-CSRF-Token': csrf,
      },
    })
      .then((response) => response.json())
      .then((data) => onMoveAppointment(e?.dragData, data));
  };

  return (
    <DropTarget targetKey="pet" onHit={handleMoveAppointment}>
      <div key={time} className="appointment">
        {time}
        {appointments?.map((appointment) => (
          <Appointment key={appointment?.id} appointment={appointment} />
        ))}
      </div>
    </DropTarget>
  );
};

Delete.propTypes = {
  greeting: PropTypes.number,
};
export default Delete;
