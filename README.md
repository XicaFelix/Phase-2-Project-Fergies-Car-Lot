# Fergie's Car Dealership

## What is This Project About?

Fergie's Car Dealership is a single page application built using React and Javascript, with React-Bootstrap for styling. This application is meant to replicate an app a car dealer could log-in to and modify the dealership's inventory. 

The 'car dealer' can log-in to the app and then see all of the cars currently listed in their inventory. They have the ability to edit a specific car by clicking on that car's edit button. Then, they are presented with a screen pre-filled with the current details for that car, which they can edit, and submit. Submitting their changes updates the json-server and re-renders the home page with the updated car inventory and details.

The 'dealer' can also add new cars to the invetory by navigating to the "Add Car" link on the NavBar. From there the 'dealer' can add in image URLs and other details for the new car. Once they submit the form, they will be taken back to the re-rendered home page. The home page will display the new car as part of its inventory. 


## Unique Features
There are a few features I find really cool about this project. First, this project utilizes React-Bootstrap as the UI library. Utilizing Bootstrap enabled me to create unique components with pre-determined styling. These components, such as the forms, would have been more labor intensive to create using vanilla Javascript. A great example would be the image carousel displayed for each car. Creating a feature like this in Javascript would be extremely tedious. 

My other favorite feature is the login/logout functionality. 

## Areas to Expand/Explore

## Requirements
* Please make sure json-server is installed (this will run the backend API)
* Also make sure you have NPM (Node Package Manager) installed to run the front-end in React

## Installation Instructions
1. Fork and Clone the repo from GitHub
2. Run json-server using [npm run dev]
3. Run front-end using [npm start]
4. Enjoy!
