# Greg Pittman's ePortfolio
Event Tracker App<br>
Features:<br>
-User Login with  hashed passwords<br>
-Places API integration<br>
-Native date and time picker<br>
-Local Notifications<br>
-Group codes to share events across multiple users<br>
-Firebase Crashlytics<br><br>

<br>This artifact is a basic event tracker that I first completed for Mobile Architecture in August of 2025. It can handle multiple user accounts on a single device. It had basic event entry functionality. It was designed to have SMS notification features. The event entry activity screen took everything as text in boxes. The event list activity was set up to use cards, so if it was full, it would scroll.<br>

My two main updates in this portion improve functionality and reduce the likelihood of bad user input. The date and time entry boxes in the new event activity screen now pop up with the default Android date and time selection pop-ups. The location selection now pops up with a search and auto-complete window. The Android date and time selection pop-ups were very straightforward. Getting the location auto-complete required a bit more work. I had to set up a project on Google Cloud to set the place API. I also started setting up push notifications following the Firebase setup tool. I got the Firebase console for the app set up. I expected push notifications to be far simpler.<br>
