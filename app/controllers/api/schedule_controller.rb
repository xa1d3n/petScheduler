class Api::ScheduleController < ApplicationController
  TIME_OPTIONS = [
    '8:00 AM',
    '8:30 AM',
    '9:00 AM',
    '9:30 AM',
    '10:00 AM',
    '10:30 AM',
    '11:00 AM',
    '11:30 AM',
    '12:00 PM',
    '12:30 PM',
    '1:00 PM',
    '1:30 PM',
    '2:00 PM',
    '2:30 PM',
    '3:00 PM',
    '3:30 PM',
    '4:00 PM',
    '4:30 PM',
    '5:00 PM',
    '5:30 PM',
    '6:00 PM'
  ].freeze

  PET_NAMES = [
    "Bubble",
    "Max",
    "Toby",
    "Ollie",
    "Briar",
    "Leo",
    "Barley",
    "Hops",
    "Sesame",
    "Splash",
    "Lexi",
    "Zeek",
    "Charlie",
    "Stella",
    "Brady",
    "Saco",
    "Dixie",
    "Lucky",
    "Mork",
    "Eva",
    "Mindy",
    "Teddy",
    "Tate",
    "Molly",
    "Tilly",
    "Beau",
    "Addie",
    "Chloe",
    "Cooper",
    "Newman",
    "Mr Black",
    "Westie",
    "Hudson",
    "Ginger",
    "Bruno",
    "Poppy",
    "Ethel",
    "Nellie",
    "Gracie May",
    "Lacey",
    "Baby Girl",
    "Lewis",
    "Sassafrass",
    "Pugsy",
    "Obie",
    "Murphy",
    "Fluffy",
    "Bunny",
    "Pippy",
    "Sasha",
    "Taco",
    "Lucy",
    "Eleanor",
    "Howie",
    "Indy",
    "Butters",
    "Brody",
    "Boulder",
    "Bogie",
    "Mango",
    "Shio",
    "Naiya",
    "Dee",
    "Isis",
    "Benson",
    "Charley",
    "Winston",
    "Tyson",
    "Callie",
    "Harley",
    "Jax",
    "Capt Jack Sparrow",
    "PhiPhi",
    "Ranger",
    "Grover",
    "Walter",
    "Sabre",
    "Clyde",
    "Solomon",
    "Gaia",
    "Cash",
    "Bub",
    "Ruby",
    "Floyd",
    "Milla",
    "Hayden",
    "Sandy",
    "Ginny"
  ].freeze

  PET_TYPES = [
    'Dog',
    'Cat',
    'Rodent',
    'Turtle',
    'Bird',
    'Hedgehog',
    'Rabbit'
  ]
  def index
    schedule = Schedule.find_by(date: params[:date])

    if schedule.blank?
      schedule = Schedule.create(date: params[:date])
      (1..5).each do
        pp Appointment.create(
          pet_name: PET_NAMES.sample,
          pet_type: PET_TYPES.sample,
          time: TIME_OPTIONS.sample,
          schedule: schedule
        )
      end
    end

    appts = schedule.appointments.map do |appt|
      {
        id: appt.id,
        pet: {
          name: appt.pet_name,
          type: appt.pet_type
        },
        time: appt.time
      }
    end

    render json: {
      appointments: appts
    }
  end

  def move
    time = params[:time]
    appt = Appointment.find_by(id: params[:appointment_id])
    return render json: { message: 'invalid params' }, status: 400 if time.blank? || appt.blank?

    appt.update(
      time: time
    )

    render json: {
      id: appt.id,
      pet: {
        name: appt.pet_name,
        type: appt.pet_type
      },
      time: appt.time
    }
  end

  def destroy
    appt = Appointment.find_by(id: params[:appointment_id])
    appt.try(:destroy)
    render json: { message: 'destroyed' }
  end
end
