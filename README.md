# Fetcher Quest

Fetcher Quest will be a text-based, single player game that stars Lupin Fetcher and his last great adventure.  I am currently building assets for this project, so I have no timetable for its completion.  Please feel free to check in on its current progress from time to time with the link provided in the description.  Once the project begins to take shape, I will likely create a website for the actual game itself.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7.

## Commit on 10/20/2018
Character creation for the game itself is complete.  I added a few auth-guards to prevent individuals from going to the class generator pages before they have taken the character creation and vice-versa.  I also created the base class for my character class objects and added a utils folder for future classes/interfaces to reside.  After testing on Microsoft Edge, I realized that ng build --prod breaks the application's logic and causes certain functions to fail.  With some research, I found out this is a known Angular issue, so hopefully this gets resolved in the near future.  The app works fine in every other browser I have tested.

Next on the docket will be the creation of an overworld page for the game itself.  With the addition of a few more minigames/scenarios, the game will be reaching a working demo in the near future--hopefully by the end of the year.  I will likely begin work on the backend once the game itself reaches a demo-level of completion.

## Commit on 09/10/2018
I added a new minigame to Fetcher Quest and reorganized components and services into separate subfolders for future scalability.  As I did with my Quiz Maker app, separating components and services will simply help me stay organized as content increases in both complexity and size.  Next commit will likely include a character creation tool and CSS queries to accommodate Microsoft Edge further (noticed some text clipping issues with smaller screens, etc).
