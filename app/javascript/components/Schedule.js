import React, { useEffect, useState, useMemo, useCallback } from 'react';
import Calendar from 'react-calendar';
import TimeFrame from './TimeFrame';
import Delete from './Delete';
import Header from './Header';
import { constructEmptySchedule } from './Schedule.helper';
import 'react-calendar/dist/Calendar.css';

const Schedule = () => {
  const [appointments, setAppointments] = useState([]);
  const [date, setDate] = useState(new Date());
  const [isCalendarShown, setIsCalendarShown] = useState(false);

  // retrieve appointments from api
  useEffect(() => {
    const fetchSchedules = async () => {
      const response = await fetch(`/api/index?date=${date}`);
      const data = await response.json();
      setAppointments(constructSchedule(data?.appointments));
    };
    fetchSchedules();
  }, [date]);

  const constructSchedule = useCallback((data) => {
    const schedules = constructEmptySchedule();
    data?.forEach((appointment) => {
      schedules[appointment?.time] = [
        ...schedules[appointment?.time],
        appointment,
      ];
    });
    return schedules;
  }, []);

  const removeFromAppointments = (appointment) => {
    return {
      ...appointments,
      [appointment?.time]: appointments[appointment?.time].filter(
        (a) => a?.id !== appointment?.id
      ),
    };
  };

  const onMoveAppointment = (oldAppointment, newAppointment) => {
    const appointmentsRemoved = removeFromAppointments(oldAppointment);
    const updatedAppointments = {
      ...appointmentsRemoved,
      [newAppointment?.time]: [
        ...appointmentsRemoved[newAppointment?.time],
        newAppointment,
      ],
    };
    setAppointments(updatedAppointments);
  };

  const onDeleteAppointment = (appointment) => {
    setAppointments(removeFromAppointments(appointment));
  };

  const renderAppointments = useMemo(() => {
    return (
      <div className="schedule">
        {Object?.entries(appointments)?.map(([time, petAppointments]) => (
          <TimeFrame
            appointments={petAppointments}
            time={time}
            key={time}
            onMoveAppointment={onMoveAppointment}
          />
        ))}
      </div>
    );
  }, [appointments, date]);

  const handleCalendarChange = (e) => {
    setIsCalendarShown(false);
    setDate(e);
  };

  const renderCalendar = useMemo(() => {
    return (
      <Calendar
        onChange={handleCalendarChange}
        value={date}
        className="calendar"
      />
    );
  }, []);

  return (
    <>
      <Header
        date={date}
        setDate={setDate}
        onShowCalendar={() => setIsCalendarShown(true)}
      />
      {isCalendarShown ? (
        <>{renderCalendar}</>
      ) : (
        <div className="appWrap">
          {renderAppointments}
          <aside className="actionWrap">
            {renderCalendar}
            <Delete onDeleteAppointment={onDeleteAppointment} />
          </aside>
        </div>
      )}
    </>
  );
};

export default Schedule;
