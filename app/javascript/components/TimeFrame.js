import React from 'react';
import PropTypes from 'prop-types';
import Appointment from './Appointment';
import { DropTarget } from 'react-drag-drop-container';

const TimeFrame = ({ appointments, time, onMoveAppointment }) => {
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
      <div className="timeFrame">
        <div>{time}</div>
        <div key={time} className="appointment">
          {appointments?.map((appointment) => (
            <Appointment key={appointment?.id} appointment={appointment} />
          ))}
        </div>
      </div>
    </DropTarget>
  );
};

TimeFrame.propTypes = {
  onMoveAppointment: PropTypes.func.isRequired,
  time: PropTypes.string.isRequired,
  appointments: PropTypes.array
};
export default TimeFrame;
