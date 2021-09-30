# Take Home Test Instructions

  The goal of this problem is to create a drag and drop interface for a scheduling system. We've created an api that initializes a days schedule, stores it, and then allows the user to move appointments around and delete them.

  ### Do all your work in a new branch
  When you're ready to submit just open a Pull Request on your branch

  * **Please do not spend more than 4 hours on this test**
  * **If it takes more than 4 hours just write how you would plan to finish the tasks**

# Features / Requirements

  1. Allow the user to choose what date they would like to view (default is today)
  2. Show a schedule for the given day (see Wireframe A for reference)
    * Avatar images should reflect what type of pet the appointment is for
  3. Allow users to drag and drop appointments from one time frame to any other
  4. Make the page mobile friendly (see Wireframe B for reference)
  5. Allow users to delete an appointment by dragging the appointment over the trash icon (doesn't apply to mobile)

  * There is a base React Component called Schedule in app/javascript/components/.
  * Pet avatar images are in app/assets/images

# Wireframes

  * You can modify the design anyway you'd like just be prepared to give a reason for the change

  ![Alt text](/public/Desktop_Wireframe.png?raw=true "Desktop Wireframe")
  * Both the date header and the side bar should stay on screen while scrolling
  * The arrows around the date should bring you to the previous and next days
  * There should be a time slot for every 30 minutes from 8 AM - 6 PM
  * If a time slot has too many appointments it should overflow to the next line

  ![Alt text](/public/Mobile_Wireframe.png?raw=true "Desktop Wireframe")
  * There is no trash drag and drop section on mobile
  * Clicking on the calendar icon in the top bar shows the second wireframe

# How to run the app

  * To run the app:

  `rails server -p 3000`

  * In a separate window run the following to have JS files hot-load when making changes:

  `./bin/webpack-dev-server`

  * To add a new react component:

  `rails generate react:component HelloWorld greeting:string`

# PetPocketbook Schedule API

### Get a schedule
```
  URL: '/api/index'

  METHOD: GET

  PARAMS:
    date (string): The date of the schedule you'd like to get

  RESPONSE (format: json):
    appointments: array of appointments with the following objects
      id: appointment id
      pet:
        name: string
        type: string (allowed values are: ['Dog', 'Cat', 'Bird', 'Rabbit', 'Hedgehog', 'Turtle', 'Rodent'])
      time: string (30 minute increments from 8 AM - 6 PM, ex: '8:30 AM')
```

### Move an appointment
```
  URL: '/api/move'

  METHOD: POST

  PARAMS:
    appointment_id (integer): The id of the appointment that should be moved
    time (string): The new time of the appointment

  RESPONSE (format: json):
    id: appointment id
    pet:
      name: string
      type: string (allowed values are: ['Dog', 'Cat', 'Bird', 'Rabbit', 'Hedgehog', 'Turtle', 'Rodent'])
    time: string (30 minute increments from 8 AM - 6 PM, ex: '8:30 AM')
```

### Delete an appointment
```
  URL: '/api/destroy'

  METHOD: POST

  PARAMS:
    appointment_id (integer): The id of the appointment that should be moved

  RESPONSE (format: json):
    message: 'destroyed' if the appointment is successfully destroyed
```
