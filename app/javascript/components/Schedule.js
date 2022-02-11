import React, { useEffect, useState, useMemo } from "react"
import Pet from './Pet';

const SCHEDULE_TIMES = new Map();
SCHEDULE_TIMES.set('8:00 AM', []);
SCHEDULE_TIMES.set('8:30 AM', []);
SCHEDULE_TIMES.set('9:00 AM', []);
SCHEDULE_TIMES.set('9:30 AM', []);
SCHEDULE_TIMES.set('10:00 AM', []);
SCHEDULE_TIMES.set('10:30 AM', []);
SCHEDULE_TIMES.set('11:00 AM', []);
SCHEDULE_TIMES.set('11:30 AM', []);
SCHEDULE_TIMES.set('12:00 PM', []);
SCHEDULE_TIMES.set('6:00 PM', []);
SCHEDULE_TIMES.set('4:30 PM', []);

const Schedule = () => {
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    const fetchSchedules = async () => {
      const response = await fetch('/api/index');
      const data = await response.json();
      setAppointments(data?.appointments);
    }
    fetchSchedules();
  }, []);

  const constructSchedule = useMemo(() => {
    const schedules = SCHEDULE_TIMES;
    appointments?.forEach((appointment) => {
      schedules.set(appointment, [...schedules.get(appointment?.time), appointment])
    })

    return ({
      [...schedules.keys()]?.map(jobsForDate =>
        jobsForDate.map(job => (
          <div>dfds</div>
        ))
      )
    })
  }, [appointments]);

  return (
    <div>
      {constructSchedule}
    </div>
  )
}

export default Schedule
