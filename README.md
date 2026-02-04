# AlignTogether - Todo Application

A full-stack todo application built with React (frontend) and Node.js/Express (backend).

## Features

- ✅ User authentication (register/login)
- ✅ Create, read, update, and delete todos
- ✅ Mark todos as completed/pending
- ✅ Filter todos by status (all/pending/completed)
- ✅ JWT-based authentication
- ✅ MongoDB database
- ✅ Responsive UI with Tailwind CSS

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing

### Frontend
- React 19
- React Router v7
- Tailwind CSS v4
- Vite

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Atlas account or local MongoDB installation
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```

4. Update the `.env` file with your MongoDB connection string:
   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   JWT_SECRET=your_jwt_secret_key
   ```

5. Start the backend server:
   ```bash
   npm start
   ```

   The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   The frontend will run on `http://localhost:5174` (or the next available port)

## Running the Application

1. Start the backend server (from the `backend` directory):
   ```bash
   npm start
   ```

2. In a new terminal, start the frontend (from the `frontend` directory):
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5174`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Todos (Protected Routes)
- `GET /api/todos` - Get all todos for the authenticated user
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/:id` - Update a todo
- `DELETE /api/todos/:id` - Delete a todo

## Usage

1. **Register**: Create a new account with your email and password
2. **Login**: Sign in with your credentials
3. **Create Todos**: Add new tasks with title and optional description
4. **Manage Todos**: 
   - Check/uncheck to mark as completed/pending
   - Edit todo details
   - Delete todos
   - Filter by status (all/pending/completed)
5. **Logout**: Click the logout button to end your session

## Project Structure

```
aligntogether/
├── backend/
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── Todo.js
│   │   └── User.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── todos.js
│   ├── db.js
│   ├── index.js
│   ├── package.json
│   ├── .env
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── ProtectedRoute.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── Todos.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## Security Notes

- Never commit the `.env` file to version control
- Use strong JWT secrets in production
- Always use HTTPS in production
- Implement rate limiting for API endpoints in production
- Add input validation and sanitization

## License

ISC
