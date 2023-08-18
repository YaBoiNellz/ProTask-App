Mahitha Bushap 


## Final Project Overview ##

Welcome to the Protask React app! (Productivity app)

## Technologies
- React
- React Router
- Firebase (Authentication, Firestore)
- Firebase Cloud Functions (for server-side logic)

## Usage
- npm install
- To start the app locally:
- npm start
- ``The app will be accessible at 'http://localhost:3000'.

** Frontend 
- **React**: JavaScript library for building dynamic user interfaces.
- **React Router**: For managing navigation between different app sections.
- **Axios (or Fetch)**: For making API requests to the backend.
- **React Calendar**: Library for displaying a calendar component.
- **Firebase (authentication and cloud messaging)**: Provides authentication and real-time notifications.

**Backend (Node.js and Express):**
- **Node.js**: Runtime environment for executing JavaScript on the server.
- **Express.js**: Web framework for building APIs and handling requests.
- **MongoDB (or another database)**: NoSQL database for data storage.
- **Mongoose**: Library for MongoDB data modeling and interactions.
- **bcrypt**: For securely hashing passwords.
- **json**: For creating and verifying JSON Web Tokens (JWT) for authentication.


## Contributions

### Login Component

- Implemented user authentication and registration forms using React components.
- Integrated Firebase Authentication for secure user registration and login.
- Managed form state and validation for a smooth user experience.
- Collaborated with frontend team to seamlessly integrate the login component into the UI.
User Authentication
- **Login**: Users can securely log in using their email and password.
- **Registration**: New users can create accounts by providing their email and a password.
- **Forgot Password**: Users can request a password reset email if they forget their password.


### Dashboard Component
- Designed and developed the dashboard's core structure for centralized access to app features.
- Utilized React Router to enable navigation between different dashboard sections.
- Incorporated React Bootstrap components for consistent and visually appealing UI.
- Integrated Chart.js library for dynamic analytics charting and data visualization.
- Added optional Firebase Cloud Messaging for real-time notifications.
**Date and Time Display**: The dashboard prominently displays the current date and time.
- **Work/Class Events**: Users can see their work or class schedule for the day on the dashboard.

### Firebase Backend Component
- Established the backend server using Node.js and Express.js for handling authentication and APIs.
- Integrated Firebase Admin SDK for secure authentication and token management.
- Implemented password hashing 
- Managed errors with Express middleware to ensure a reliable backend.
### 2. Firebase Authentication Integration
2. Configure Firebase: Replace the Firebase configuration values in `src/index.js` and `src/App.js`.
3. Implemented the Login Component: Inside the `components` folder, find `Login.js`. This component handles the login form and integrates with Firebase Authentication.



## Challenges and Takeaways
Challenges:
- Overcoming integration complexities and real-time updates required careful planning.
- Ensuring cross-browser compatibility for a consistent experience was an ongoing consideration.
- Designing a user-centric interface demanded creative thinking and empathy.
### 1. Error Handling
Challenge: Properly handling authentication errors, such as incorrect password or non-existing email, is crucial for a user-friendly experience.
Solution: Implement error handling mechanisms to display clear and helpful messages to users when login attempts fail.

### 2. Security Concerns
Challenge: Ensuring the security of user credentials and data during the authentication process. 
Solution: Use Firebase's secure authentication methods 

Takeaways:
- Enhanced collaboration and communication skills through close teamwork.
- Sharpened problem-solving skills by tackling technical challenges head-on.
- Gained a comprehensive understanding of full-stack development, from frontend to backend and various technologies framworks used 

## Conclusion
The Protask React app has been an enriching journey, allowing me to contribute to meaningful features and expand my technical expertise.

mahitha.bushap37@myhunter.cuny.edu 




## Pro Task Calendar App Documentation 
## Created by Darnell Chambers

## Calendar.css
1. First I started off the css code by adding an import react from react and a import from Calendar.css the main reason I added this in the code was to start off by linking the Calendar documentation so that when I eventually debug and test the code that it would link to what was written in the calendar css and js code so that when we use the react commands such npm start that it leads straight to the calendar portion in the app

2. Next, I started off with creating and declaring a function app with a <div class> function the nain intention of this was to establish the title of the calendar and the contents that would be displayed as the calendar drops down in the app menu. the idea I initially had was that as soon as the calendar displayed it would show arrows followed by the dates

3. After I added this function into the calendar css code what I decided to do next was bring everything together. In addition, I added a Calendar class that had a constructor component. After that I decided to add functions and code that strictly define the dates and month with their corresponding days. I added a function that was formatted as this.months after that I started to add each month such as January, February, March, April, etc with the correct days each month had. For instance, January has 31 eays listed in the month. I followed this same format for each month making sure every date/month would have the correct numbers of days so that the app can display each month with the following dates.

4.After each date was listed i added a render function, this function contains more components to add on to the calendar. after the dates are listed. the calendar will need components to help support everything together. it has functions of the class name, month, and date.

## Calendar.js
1. Similarly to the Calendar.css file I started off by writing a import react from react function. After that was implemented I decided to implement a public class which extended and contained a React.Component.

2. Next, I then implemented a constructor class after that was done i then Defined the month and corresponding days. Similarly, to the Calendar.css each month and the maximum amount od days were added to the month. I specifically made sure to take into to account for February to not include the leap year days in the month of February. 

3. After each date was listed i added a render function, this function contains more components to add on to the calendar. after the dates are listed. the calendar will need components to help support everything together. it has functions of the class name, month, and date.

4. Now, that the Calendar.js file is completed i figured both parts are completed now and by running the npm start commands for reach I expect a page to open up in my browser that will direct me and any user to the calendar.

## Challenges of App Assignment and Getting the Calendar to Work

There were some roadblocks I ran into when constructing the calendar, some of the challenges were challenging in a good way. Facing thse challenges made me thought od different strategies/methods. When i first started constructing my code for the Calendar I swapped and made many edits. I ended uo scarooing my old pervious code 5 different times. the main challenge I faced was getting my calendar implemented into our Pro Task I had the code written beforehand the main issue was combining it into everything and making it run on my system. Whenever I would try to run the npm start command on my mac I would face issues as the code would not be recognized on neither my vs code or terminal applications. Noticing this I then went to different platforms such as Figma making a mock prototype of what I would like my calendar to represent and display. I added different components and borders to allign the calendar the way I envisioned for the app. if anything this capstone assignment has taught me alot in working with a team. it has taught me to lean on my team for the moments I feel like I will stumble. working with one another was great in ther fact that we were able to put our minds together in trying to help each other with challenges that came our way. In addition, it has shown me to always think of a backup in case something does not go fully in the way you expect it to.



## Rehnuma Nusrat

## Contributions
### ToDoList
- I first started off with implementing the task list component and used firebase real time database for the backend
- For adding tasks I thought of what would be most useful for the user to input, while also not requiring them to put in too much info.
- For the styling I worked on making it presentable so users would want to use the task list
  
### Settings/Notifications
- Created the Settings Page for the user to logout and change their notification preferences
- For the Notifications I wanted to send the user push notifications through firebase cloud messaging, however I didn't get to test if it works do I commented out that functionality

### Firebase Real Time Database
- I used the firebase to read and write the data for the task list and also made sure the dashboard component was using the same data set to fetch the data
- I chose this database over the firestore database because I wanted to implement the push notifications for the web while the app was turned off

### Making sure the components were working with each other
- We worked on our features separately, but once we put it together there were alot of errors I had to go through and I also had to make sure the components were reading from the database properly
- I also made sure that the components would redirect to another components when the buttons were clicked and added a sign up and logout button

## Challenges
- The task list component didn't give me too much trouble until I started doing the read and writes to the database, but I eventually figured out how to use it
- For the notifications I had trouble figuring out how to do it, so I commmented out the code because I didn't get to test it yet
- For some of the dashboard components I commented out what wasn't working, beacause I didn't have enough time to fix them.
- I also tried using firebase hosting but it didn't render anything when I delpyed it, but it does run locally.
- Time Constraint: Because of the time constraint we didn't get to implement all the features we wanted and test our features thoroughly.
