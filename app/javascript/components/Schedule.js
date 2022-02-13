import React, { useEffect, useState, useMemo, useCallback } from 'react';
import Calendar from 'react-calendar';
import Pet from './Pet';
import 'react-calendar/dist/Calendar.css';

const Schedule = () => {
  const [appointments, setAppointments] = useState([]);
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const fetchSchedules = async () => {
      const response = await fetch(`/api/index?date=${date}`);
      const data = await response.json();
      setAppointments(constructSchedule(data?.appointments));
    }
    fetchSchedules();
  }, [date]);

  const constructSchedule = useCallback((data) => {
    const schedules = {
      '8:00 AM': [],
      '8:30 AM': [],
      '9:00 AM': [],
      '9:30 AM': [],
      '10:00 AM': [],
      '10:30 AM': [],
      '11:00 AM': [],
      '11:30 AM': [],
      '12:00 PM': [],
      '12:30 PM': [],
      '1:00 PM': [],
      '1:30 PM': [],
      '2:00 PM': [],
      '2:30 PM': [],
      '3:00 PM': [],
      '3:30 PM': [],
      '4:00 PM': [],
      '4:30 PM': [],
      '5:00 PM': [],
      '5:30 PM': [],
      '6:00 PM': [],
    };
    data?.forEach((appointment) => {
      schedules[appointment?.time] = [...schedules[appointment?.time], appointment];
    });
    console.log(schedules);
    return schedules;
  }, []);

  const renderAppointments = useMemo(() => {
    return (
      <>
        {Object?.entries(appointments)?.map(([time, pets]) => (
          <div key={time} className="appointment">
            {time}
            {pets?.map((pet) => (
              <Pet pet={pet?.pet} />
            ))}
          </div>
        ))}
      </>
    );
  }, [appointments, date]);

  return (
    <div>
      {renderAppointments}
      <Calendar onChange={setDate} value={date} />
    </div>
  );
}

export default Schedule
