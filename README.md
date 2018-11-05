# Fetcher Quest

Fetcher Quest will be a text-based, single player game that stars Lupin Fetcher and his last great adventure.  I am currently building assets for this project, so I have no timetable for its completion.  Please feel free to check in on its current progress from time to time with the link provided in the description.  Once the project begins to take shape, I will likely create a website for the actual game itself.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7.  Currently utilzing Angular 7.x.x.

## Commit on 11/5/2018
I recently added two new minigames:  A Kind of Slush and The Refiner's Fire to the list of minigames.  I readded the ability to zoom-in in order to improve the user experience on mobile/smaller devices in case users want to increase the size of certain puzzles.  With Angular 7 releasing, I went ahead and upgraded the app to 7 which fixed the issues with Microsoft Edge not cooperating with my services properly with ng build --prod; however, now the intro does not render properly.  I will look into solving this issue in the future.  It could be a new issue with animated SVGs, but it still works properly in all other tested browsers.  

Next on the itinerary is to continue with adding minigames, begin planning the backend, and restructuring the paths in my angular router as I have an inconsistent naming convention currently (began using camelCase, but have begun favoring using dashes instead).  Will switch all the paths to the same convention for clarity in the next update.

## Commit on 10/20/2018
Character creation for the game itself is complete.  I added a few auth-guards to prevent individuals from going to the class generator pages before they have taken the character creation and vice-versa.  I also created the base class for my character class objects and added a utils folder for future classes/interfaces to reside.  After testing on Microsoft Edge, I realized that ng build --prod breaks the application's logic and causes certain functions to fail.  With some research, I found out this is a known Angular issue, so hopefully this gets resolved in the near future.  The app works fine in every other browser I have tested.

Next on the docket will be the creation of an overworld page for the game itself.  With the addition of a few more minigames/scenarios, the game will be reaching a working demo in the near future--hopefully by the end of the year.  I will likely begin work on the backend once the game itself reaches a demo-level of completion.

## Commit on 09/10/2018
I added a new minigame to Fetcher Quest and reorganized components and services into separate subfolders for future scalability.  As I did with my Quiz Maker app, separating components and services will simply help me stay organized as content increases in both complexity and size.  Next commit will likely include a character creation tool and CSS queries to accommodate Microsoft Edge further (noticed some text clipping issues with smaller screens, etc).
