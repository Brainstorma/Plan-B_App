# Plan-B_App

Plan-B is a web application that helps you keep track of your plants and their watering schedule. You can add, edit, delete, and water your plants with a simple and intuitive interface. Plan-B is built with Wasp, React, Node.js and Prisma.

## Features

- Home page lists all of your plants with their names and watering days left
- 'Water' button updates the watering status of the plant and resets the countdown
- 'Add plant' button takes you to a new page where you can create a new plant
- 'Edit' and 'Delete' buttons allow you to modify or remove your plants
- Plants are stored in a PostgreSQL database using Prisma ORM
- User authentication and authorization using Wasp Auth
- Responsive design using Tailwind CSS

## Installation

To run Plan-B locally, you need to have Node.js, npm, and Wasp CLI installed on your machine. You also need to have PostgreSQL running on port 5432.

1. Clone this repository and cd into it
2. Run `npm install` to install the dependencies
3. Run `wasp db migrate dev` to create and migrate the database
4. Run `wasp start` to start the development server
5. Open `http://localhost:3000` in your browser and enjoy!

## Screenshots

!Home page
!Add plant page
