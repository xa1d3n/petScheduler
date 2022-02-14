import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

const Header = ({ setDate, date, onShowCalendar }) => {
  const handleNext = () => {
    const newDate = new Date(date.setDate(date?.getDate() + 1));
    setDate(newDate);
  };

  const handlePrev = () => {
    const newDate = new Date(date.setDate(date?.getDate() - 1));
    setDate(newDate);
  };

  return (
    <header className="header">
      <FontAwesomeIcon onClick={handlePrev} icon={faAngleLeft} />
      <span className="dateWrap">{date?.toDateString()}</span>
      <FontAwesomeIcon onClick={handleNext} icon={faAngleRight} />
      <FontAwesomeIcon
        onClick={onShowCalendar}
        className="calendarIcon"
        icon={faCalendarDays}
      />
    </header>
  );
};

Header.propTypes = {
  pet: PropTypes.shape({ name: PropTypes.string, type: PropTypes.string })
    .isRequired,
};
export default Header;
