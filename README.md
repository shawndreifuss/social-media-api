# social-media-api

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  
  ## Description 

This is an API for a social network web application where users can share their thoughts, react to friends thoughts, and create a friend list. It uses Express.js for routing, a MongoDB database, JavaScript Date object to format timestamps. The seed data is created using Insomnia.  

  ## Table of Contents 
  1. [Title](#title)
  2. [Description](#description)
  3. [Installation](#installation)
  4. [Usage](#usage)
  5. [Technologies](#technologies)
  6. [License](#license)
  7. [Contributing](#contributing)
  8. [Tests](#tests)
  9. [Credits](#credits)
  10. [Author](#author)
  11. [Questions](#questions)
  
  ---
  ## Installation 
  * To set up all the existing npm packages, run `npm init`.

  * To install the dependencies on the `node_modules` folder, run `npm install` or
      * `npm i express` to install Express.js;
      * `npm i mongoose` to install Mongoose; and 
      * `npm i nodemon` to install Nodemon.
      * `npm run seed` to install seed.js
      * To invoke the application, run `npm start`.
      * When the server is started, the Mongoose models are synched to the MongoDB database.

  
  --- ## Usage 
A user can utilize this API to create a new user with a valid username and email, add other users as friends, post "thoughts" as well as "reactions" to thoughts, update and delete thoughts and reactions, and delete friends.

--- 
 ## Technologies 
  * JavaScript
  * Node.js
  * Express.js
  * MongoDB
  * Mongoose
  * Insomnia



 
 ### API Routes 
On Insomnia, the following API routes have been created and used to add, update, or remove users, friends, thoughts, and reactions in the user's database. 

 **USER**
  * Create a new user:  `POST /api/users`
  * Get all users: `GET /api/users`
  * Get a single user by its `id`: `GET /api/users/:userId`

  * Update a user by its `id`: `PUT /api/users/:userId`

  * Delete a user by its `id`: `DEL /api/user/:userId`

  **FRIEND**
  * Add a new friend to a user's friend list: `POST /api/users/:userid/friends/:friendId`
  * Delete a friend from a user's friend list: `DEL /api/users/:userid/friends/:friendId`

**THOUGHT**
  * Create a new thought: `POST /api/thoughts/`
  * Get all thoughts: `GET /api/thoughts/`
  * Get a single thought by its `id`: `GET /api/thoughts/:thoughtId`
  * Update a thought by its `id`: `PUT /api/thoughts/:thoughtId`
  * Delete a thought by its `id`: `DEL /api/thoughts/:thoughtId`

 **REACTION**
  * Create a reaction: `POST /api/thoughts/:thoughtId/reactions`
  * Delete a reaction by the `reactionId`: `DEL /api/thoughts/:thoughtId/reactions/:reactionId`
 
  ## Author 
  Shawn Dreifuss
  ## Questions 📌
  For questions or issues, please contact: 
  - Shawn Dreifuss
  - Email: shawndreifuss@icloud.com
  - GitHub Username: shawndreifuss
  - GitHub Profile: https://github.com/shawndreifuss