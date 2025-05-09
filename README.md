# Task Manager

Task Manager is a web application that allows users to create, manage, and track tasks. It supports adding, updating, and deleting tasks with categories and priorities, stored in a MongoDB database. The application is built with Node.js, Express, MongoDB, and vanilla JavaScript, offering a simple and responsive user interface.

Features
--------

- **Task Management**: Add, update, complete, or delete tasks with titles, descriptions, categories, and priorities.
- **Categories and Priorities**: Organize tasks by category (Work, Personal, Sport, Shopping) and priority (Low, Medium, High).
- **Responsive Design**: Optimized for both desktop and mobile devices with a clean, user-friendly interface.
- **Error Handling**: Displays user-friendly error messages for invalid inputs or failed operations.
- **Persistent Storage**: Uses MongoDB to store tasks securely.

Tech Stack
----------

- **Backend**: Node.js, Express, MongoDB (via Mongoose)
- **Frontend**: HTML, CSS, vanilla JavaScript
- **Dependencies**: Mongoose (MongoDB ORM), Express (web framework), Dotenv (environment variables)
- **Styling**: Custom CSS with responsive design
- **Development Tools**: Nodemon (for auto-restarting the server)

Prerequisites
-------------

Before running the application, ensure you have the following installed:

- `Node.js <https://nodejs.org/>`_ (v16 or higher)
- `npm <https://www.npmjs.com/>`_ (comes with Node.js)
- `MongoDB <https://www.mongodb.com/>`_ (local or cloud instance, e.g., MongoDB Atlas)

Installation
------------

Follow these steps to set up and run the project locally:

1. **Clone the Repository**:

      git clone https://github.com/your-username/task-manager.git
      cd task-manager

2. **Install Dependencies**:

      npm install


3. **Set Up MongoDB**:
   Ensure MongoDB is running locally on ``mongodb://localhost:27017`` or update the connection string in ``config/db.js``:


      mongoose.connect('mongodb://admin:admin@localhost:27017/todo?authSource=admin')

5. **Run the Application**:

      npm start

   The server will start at ``http://localhost:3000`` (or the port specified in your ``.env`` file).

6. **Access the Application**:
   Open your browser and navigate to ``http://localhost:3000``. Use the form to add tasks and manage them.

