# Fetcher Quest

Fetcher Quest will be a text-based, single player game that stars Lupin Fetcher and his last great adventure.  I am currently building assets for this project, so I have no timetable for its completion.  Please feel free to check in on its current progress from time to time with the link provided in the description.  Once the project begins to take shape, I will likely create a website for the actual game itself.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7.  Currently utilzing Angular 7.x.x.

## Commit on 1/30/2019
Added several new minigames including a card-based gambling minigame.  Fixed several issues with broken routes from when I renamed my various routes to be more consistent with one another.  Updated my spec files to streamline additional unit testing in the future.  I plan on creating an error page for mistaken routes rather than depending on my landing page and will continue to add a few more minigames for the sake of variety during the main game.  All that will be left after this will be to create an intro tutorial and create a logical order for the game's progression.  I would say I am over half way to completing the game in its initial release.  Updates will be made as much as possible as I hope to complete the first version in the coming months.

## Commit on 1/3/2019
I added a new minigame, An Illtimed Tenure, as well as the basic layout for the game itself.  The travel screen and event screens will form the backbone of the game, and with those in place, I will begin putting everything together and balancing content for an initial release of the game.  I added a temporary "Standby" link on the navigation bar to help with testing the travel screen and events as I create them.  The travel screen routes to the event screen view which randomly generates a dynamic component from a list of possible events.  Finally, I fixed a glitch in the "At the 21st Hour" minigame where the turn button would be permanently disabled when you entered an out of bound number and clicked the button.  It should now function properly regardless of user input.

## Commit on 11/5/2018
I recently added two new minigames:  A Kind of Slush and The Refiner's Fire to the list of minigames.  I readded the ability to zoom-in in order to improve the user experience on mobile/smaller devices in case users want to increase the size of certain puzzles.  With Angular 7 releasing, I went ahead and upgraded the app to 7 which fixed the issues with Microsoft Edge not cooperating with my services properly with ng build --prod; however, now the intro does not render properly.  I will look into solving this issue in the future.  It could be a new issue with animated SVGs, but it still works properly in all other tested browsers.  

Next on the itinerary is to continue with adding minigames, begin planning the backend, and restructuring the paths in my angular router as I have an inconsistent naming convention currently (began using camelCase, but have begun favoring using dashes instead).  Will switch all the paths to the same convention for clarity in the next update.

## Commit on 10/20/2018
Character creation for the game itself is complete.  I added a few auth-guards to prevent individuals from going to the class generator pages before they have taken the character creation and vice-versa.  I also created the base class for my character class objects and added a utils folder for future classes/interfaces to reside.  After testing on Microsoft Edge, I realized that ng build --prod breaks the application's logic and causes certain functions to fail.  With some research, I found out this is a known Angular issue, so hopefully this gets resolved in the near future.  The app works fine in every other browser I have tested.

Next on the docket will be the creation of an overworld page for the game itself.  With the addition of a few more minigames/scenarios, the game will be reaching a working demo in the near future--hopefully by the end of the year.  I will likely begin work on the backend once the game itself reaches a demo-level of completion.

## Commit on 09/10/2018
I added a new minigame to Fetcher Quest and reorganized components and services into separate subfolders for future scalability.  As I did with my Quiz Maker app, separating components and services will simply help me stay organized as content increases in both complexity and size.  Next commit will likely include a character creation tool and CSS queries to accommodate Microsoft Edge further (noticed some text clipping issues with smaller screens, etc).
