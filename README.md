# Chat API

This is a simple chat API built with Node.js, Express, and Socket.IO. It supports user authentication, message storage in MongoDB, file uploads, and real-time chat functionality.

## Features

- User registration and login with JWT authentication
- Send and receive messages in real-time
- Create and join chat rooms (default room: `room1`)
- Upload files
- Messages are stored in MongoDB

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:

   ```bash:
   git clone https://github.com/yourusername/chat-api.git
   cd chat-api
2. install:
    ```bash:
    npm install
3. Create a .env file in the root directory and add your MongoDB connection string and JWT secret:
    ```bash:
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
4. start the server:
    ```bash:
    node server.js

## API Endpoints
POST /api/auth/register: Register a new user
- Request Body:

json

    {
      "username": "your_username",
      "password": "your_password"
    }

POST /api/auth/login: Login a user

    Request Body:



    {
      "username": "your_username",
      "password": "your_password"
    }

POST /api/chat/message: Send a message

    Request Body:



    {
      "username": "your_username",
      "content": "your_message",
      "room": "room_name"
    }

GET /api/chat/messages/:room: Get messages from a room




        [
          {
            "username": "user1",
            "content": "Hello!",
            "room": "room_name",
            "createdAt": "2023-01-01T00:00:00.000Z"
          },
        ]

POST /api/chat/upload: Upload a file Form Data:
            file: The file to upload

Frontend Usage

    Open the public/index.html file in your browser.
    Enter your username and click "Join Room" to join the default room room1.
    Type your message and click "Send" to send it to the chat.

Example of Real-time Chat

You can open multiple browser tabs to test the real-time chat functionality. Each user can join the same room and see messages from others in real-time.
