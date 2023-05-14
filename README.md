# README

This is a simple web application that allows users to manage a list of people. It consists of two services, a backend and a frontend, that are defined in a Docker Compose file.

## Getting Started

To run the application, make sure you have Docker installed on your machine. Then, navigate to the root directory of the project and run the following command:


docker-compose up


This will start both the backend and frontend services and make them accessible at http://localhost:3000.

## Backend Service

The backend service is a Node.js server that listens on port 5000. It exposes several endpoints for handling HTTP requests related to managing a list of people. These endpoints include:

- GET /persons - Retrieves a list of all people
- GET /persons/:id - Retrieves a specific person by ID
- POST /persons - Creates a new person
- PUT /persons/:id - Updates an existing person
- DELETE /persons/:id - Deletes an existing person

The server uses the Express framework to handle these requests and returns JSON data.

## Frontend Service

The frontend service is a React application that makes HTTP requests to the backend service using the Axios library. It allows users to create, update, and delete people from the list. The application displays a list of people with their names and buttons to delete or update them. It also includes a button to create a new person.

## Conclusion

This is a simple example of how to build a web application using Docker and two services, a backend and frontend. Feel free to modify and extend the application to suit your needs.
