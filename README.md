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

My two main updates in the first portion improve functionality and reduce the likelihood of bad user input. The date and time entry boxes in the new event activity screen now pop up with the default Android date and time selection pop-ups. The location selection now pops up with a search and auto-complete window. The Android date and time selection pop-ups were very straightforward. Getting the location auto-complete required a bit more work. I had to set up a project on Google Cloud to set the place API. I also started setting up push notifications following the Firebase setup tool. I got the Firebase console for the app set up. I expected push notifications to be far simpler.<br>
![Image Firebase set-up](./images/Screenshot%202025-11-17%20025229.png)
![Image of location search](./images/Screenshot%202025-11-17%20010300.png)
![Image of date picker](./images/Screenshot%202025-11-17%20020341.png)
![Image of time picker](./images/Screenshot%202025-11-17%20020417.png)<br><br>



For the next milestone, the focus was on algorithms. The main focus was on sorting the events. I also finished the notifications. I did learn that the Android Studio built-in guide for notifications was for push notifications from a server and not notifications scheduled by the app client side. I converted the worker class from the last milestone to work for client-side notifications. I added the code to control how the notification would look in the main view class. In the settings menu, I converted the SMS request button into a notification request button. I also added a force notification button because of how I had it coded.<br>

The next major change was adding sorting to the events. Three buttons sort the events, and each button sorts differently. The Sort by Date button uses the output from the SQL query. Sort by Title uses a basic quicksort algorithm. Sort by location uses the List class's built-in sort function. While not very necessary for the current app, I also set up some basic password hashing.<br>

![Image of the events after the title sort button was clicked](./images/Screenshot%202025-11-30%20151110.png)
![Image of force notification buttons](./images/Screenshot%202025-11-30%20233742.png)
![Image of notification](./images/Screenshot%202025-11-30%20150030.png)<br><br>

For this milestone the focus was on databases. I already have two databases in the project. A database for user and password information, and a database for events. For this I picked what I thought would be the simple task of adding group codes so multiple users could share the same event. I added an extra entry box on the event entry and a box in setting tab to add group codes. The problem I encountered was I was hoping I could use a list like datatype in the user database so I could store multiple group codes with each user. I found out the database would not accept that. The workaround I had to do was store them in a comma separated string. The get events now had to be modified to search for events in both tied to the user and the group code.<br>

I also cleaned things up. I removed my testing Toast popups. I removed older imports and variables I was not using anymore. Part of redoing the getEvents method, I also reworked todaysEvent and tomorrowsEvents to remove duplicate code. Now both of those call getEvent and search the events from that. For something this size the I really don’t need to query the database for each of those.<br><br>

![Image of group entry](./images/image_2025-12-15_235157891.png)

<a href="https://github.com/Greggo-Waffles/EventTracker">Event Tracker Repository</a>

<strong>Requirements and Privacy:</strong> Android 12 or higher required. This app uses Firebase Crashlytics for crash reporting, which collects device information including device model, OS version, and crash diagnostics. <strong>Sideloading on unsupported Android versions will result in crashes</strong><br><br> 


<iframe width="560" height="315" src="https://www.youtube.com/embed/Z9sKwJ96vGs?si=R_SxonuH26VeAB39" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<div style="background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:1.5rem 1.75rem;margin:2rem 0;font-family:sans-serif;">
  <p style="font-weight:600;font-size:15px;margin:0 0 6px;">Try the app on your device</p>
  <p style="font-size:14px;color:#6b7280;margin:0 0 1.25rem;line-height:1.6;">
    Event Tracker is distributed via Google Play Internal App Sharing and requires Android 12 or higher.
    To request access, send an email below and I will follow up with the install link.
  </p>
  <a href="mailto:gepittman1+dev@gmail.com?subject=Event%20Tracker%20APK%20Request&body=Hi%20Greg%2C%0A%0AI%20would%20like%20to%20try%20the%20Event%20Tracker%20app.%20Please%20send%20me%20the%20install%20link.%0A%0AThanks"
     style="display:inline-flex;align-items:center;gap:8px;padding:8px 18px;border-radius:8px;border:1px solid #d1d5db;background:#fff;font-size:14px;font-weight:500;color:#111;text-decoration:none;">
    ✉ Request access
  </a>
  <span style="display:block;margin-top:8px;font-size:12px;color:#9ca3af;">gepittman1+dev@gmail.com</span>
</div>
