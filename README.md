# Bits

## Description:

Bits provides a system to successfully sustain habits using the concepts of the book "Atomic Habits" by James Clear

### Background Info:

Habits are very hard to build for the long-term because results are not seen immediately.
People make a few small changes, and fail to see a tangible result, and decide to stop.

Instead of focusing on goals (results you want to achieve), focus on systems (processes that lead to those results).

## Screenshots of Application:

![image](https://user-images.githubusercontent.com/62129720/121761991-5c5df780-cb01-11eb-9868-c2874f8d5f31.png)

![image](https://user-images.githubusercontent.com/62129720/121762071-a7780a80-cb01-11eb-904d-85daaa0c6f9a.png)

![image](https://user-images.githubusercontent.com/62129720/121762017-75ff3f00-cb01-11eb-83bf-7090b9ae1a04.png)

![image](https://user-images.githubusercontent.com/62129720/121762037-8dd6c300-cb01-11eb-828e-4367b4394c27.png)

![image](https://user-images.githubusercontent.com/62129720/121762113-e4dc9800-cb01-11eb-810c-5831e28b9d46.png)

## Technologies Used:

- MongoDB/Mongoose
- Express
- React
- Node

## Dependencies:

- Bcrypt
- Dotenv
- Express
- Json web token
- Material-UI
- React-router-dom

## Getting Started:

- Application: https://bitssss.herokuapp.com/

## Next Steps: Planned Future Enhancements

- ~~Incorporate popovers:~~

  - Futher explain the system and its steps on the habit form page
  - Focus on the 3 types of responses (bronze, silver, gold)

- **Add more options for craving and reward steps:**

  - ex. Accountability partners
  - ex. Join a culture where your desired behavior is the norm

- **Incorporate other concepts from book:**

  - Outcome-based habits VS Identity-based habits
  - Problem phase (cue, craving) and solution phase (response, reward)

- **Incorporate a system for destroying bad habits (habit detonator):**

  - 1. Make it invisible
  - 2. Make it unattractive
  - 3. Make it difficult
  - 4. Make it unsatisfying

- **Incorporate a habit tracking system:**

  - Users would be able to track their habits daily and which response they did for that day (bronze, silver, or gold)
  - The current route to create a new habit is /habitgenerator
  - Change it to /habitgenerator/create and the /habitgenerator route will be a tracker instead
  - Have only the route /habitgenerator in App.js and then have the remaining routes (/:id, /:id/edit) in its component (nested routing)

- **When a habit is created or updated, redirect the user to that specific habit:**

  - It currently redirects to /habitgenerator

- **Add useRef for form validation:**

  - Right now, the habit form can be submitted even if all the inputs are blank

- **Improve the navbar styling:**

- ~~Improve the app for mobile screens:~~

  - Make {user.name}'s Habits its own line or remove it completely for mobile screens

- **Using Material-UI's Dialog for delete functionality deletes the last habit in the array:**
