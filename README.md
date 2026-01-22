#Task Management API# 

A lightweight, RESTful API built with Node.js and Express to demonstrate the full Software Development Life Cycle (SDLC). This project serves as a template for CRUD operations and clean API architecture.
Features
 * Create Tasks: Add new items with a title and description.
 * Read Tasks: Retrieve a list of all current tasks.
 * Update Status: Toggle tasks between Pending and Completed.
 * Delete Tasks: Remove tasks from the system.
 * In-Memory Storage: Fast execution without the need for external database configuration.
Tech Stack
 * Runtime: Node.js
 * Framework: Express.js
 * Testing: Jest (planned)
 * Documentation: Markdown
Installation and Setup
To get a local copy up and running, follow these steps:
 * Clone the repo
   git clone https://github.com/username/task-manager-sdlc.git

 * Install dependencies
   cd task-manager-sdlc
npm install

 * Run the server
   node app.js

   The server will start at http://localhost:3000.
API Endpoints
| Method | Endpoint | Description |
|---|---|---|
| POST | /tasks | Create a new task |
| GET | /tasks | Get all tasks |
| PATCH | /tasks/:id | Update task completion status |
| DELETE | /tasks/:id | Remove a task |
Sample Request (Create)
{
  "title": "Finish SDLC Report",
  "description": "Complete the documentation for the project"
}

SDLC Implementation Details
This project followed these specific phases:
 * Analysis: Identified the need for a stateless task tracker.
 * Design: Defined JSON schemas and REST patterns.
 * Implementation: Developed using Express.js middleware.
 * Testing: Verified via Postman/Insomnia.
 * Deployment: Prepared for containerization via Docker.
License
Distributed under the MIT License. See LICENSE for more information.
