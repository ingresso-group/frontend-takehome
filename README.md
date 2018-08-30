# Ingresso Front-End Takehome Task
Take home challenge for frontend developers and UI/UX applicants

# The Purpose

This task is a chance for you to show us how you go about writing and
structuring code in the context of a larger objective.

Take this opportunity to show us your:

1. skills
1. specific areas of knowledge

## Instructions

* Clone this repository.
* Complete the task
* Send us your solution provide us the link to a **private** repository.
* Leave comments where you were not sure how to properly proceed.
* Create a new README with:
    - instructions about how to run your build
    - notes on what you have implemented

## The Task

Your task is to create a calendar widget for a theatre booking app.

### APPEARANCE

![Screen](https://raw.githubusercontent.com/ingresso-group/frontend-takehome/master/assets/calendar.png)

* Your calendar should support at minimum a monthly view
* You can style the calender as you wish.
* We expect the app to be as responsive as possible.
* You are free to use any preprocessor you wish, or write raw CSS.

### FUNCTIONALITY

* The widget should be able to cycle through a month by month view of the year
* The calendar should be able to display performance data based on calls to
our api (you will make the calls to your local node server and it will forward
them to our api). You have access to 3 end points:
    - event data: http://localhost:5656/api/event/:event_id
    - calendar data: http://localhost:5656/api/calendar/:event_id
    - months data: http://localhost:5656/api/months/:event_id
* You are free to use any framework you wish, or do it VanillaJS style. Please
provide a note on your choice in the README.
