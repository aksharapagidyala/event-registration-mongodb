# event-registration-mongodb

A simple event registration form built using HTML, CSS, Node.js, and MongoDB.
Form submissions are saved directly to a MongoDB database.

# Features

HTML registration form

Saves form data to MongoDB (eventdb.registrations)

Supports multiple event selections

Minimal Node.js backend using Express

# Folder Structure

index.html → Registration form

style.css → Styling

server.js → Node.js backend

package.json → Node dependencies

node_modules → Installed packages

# Setup

Install Node.js dependencies.

Start MongoDB (as a service or manually).

Start the Node.js server.

Open the form in a browser at http://localhost:3000.

Fill the form and click Register.

# Check Data

Use mongosh or MongoDB Compass to view the submitted data.

Submitted entries are stored in the registrations collection under the eventdb database.

# Notes

Keep the Node server running while submitting forms.

The registrations collection is created automatically when the first form is submitted.

Checkbox values for events are stored in an array called events.
