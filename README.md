# Take Home Test Instructions

  The goal of this problem is to create a drag and drop interface for a scheduling system. You will use a PetPocketbook API to initialize a days schedule, store it, and then allow the user to move appointments around and delete them.

  ### Do all your work in a new branch
  When you're ready to submit just open a Pull Request on your branch

  * **Please do not spend more than 4 hours on this test**
  * **If it takes more than 4 hours just write how you would plan to finish the tasks**

# Features / Requirements

  1. For any day that doesn't already have a schedule you will initialize one using the PetPocketbook API (instructions below)
  2. Save that schedule and display it anytime someone views that same day
  3. Allow the user to choose what date they would like to view (default is today)
  4. Show a schedule for the given day (see Wireframe A for reference)
    * Avatar images should reflect what type of pet the appointment is for
  5. Allow users to drag and drop appointments from one time frame to any other
  6. Make the page mobile friendly (see Wireframe B for reference)
  7. Allow users to delete an appointment by dragging the appointment over the trash icon (doesn't apply to mobile)

  * There is a base React Component called Schedule in app/javascript/components/.
  * There is a rails controller called Schedule
  * Pet avatar images are in app/assets/images
  * API key: `jQkI63suJhqd3DtL`

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
  URL: 'candidate.petpocketbook.com/schedule'

  METHOD: GET

  PARAMS:
    api_key (string): Your personalized api key located at top of take home test README

  RESPONSE (format: json):
    appointments: array of appointments with the following objects
        pet:
          name: string
          type: string (allowed values are: ['Dog', 'Cat', 'Bird', 'Rabbit', 'Hedgehog', 'Turtle', 'Rodent'])
        time: string (30 minute increments from 8 AM - 6 PM, ex: '8:30 AM')

  EXAMPLE RESPONSE:
  {"appointments":[
    {
      "pet":{
        "name":"Briar",
        "type":"Hedgehog"
      },
      "time":"12:30 PM"
    },
    {
      "pet":{
        "name":"Beau",
        "type":"Rabbit"
      },
      "time":"12:00 PM"
    },
    {
      "pet":{
        "name":"Nellie",
        "type":"Dog"
      },
      "time":"3:00 PM"
    },
    {
      "pet":{
        "name":"Stella",
        "type":"Rodent"
      },
      "time":"5:00 PM"
    },
    {
      "pet":{
        "name":"Bruno",
        "type":"Rodent"
      },
      "time":"8:00 AM"
    }
  ]}
```
