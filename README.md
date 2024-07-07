# Organization Management App

[Visit the App]()

This application facilitates user and organization management, offering features such as user registration, login, and user-organization associations.

## Features

- User registration with automatic default organization creation.
- User login with JWT authentication.
- CRUD operations for organizations.
- User association with organizations.

## Technology Stack

- Node.js
- Express
- Sequelize
- PostgreSQL
- jsonwebtoken
- Joi

## Setup and Installation

### Prerequisites

- Node.js (v14.x or higher)
- npm (v6.x or higher)
- PostgreSQL

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/vickymayowa/HNG-INTERNSHIP-STAGE-3-TASK
   cd organization-management-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory with the following variables:

   ```env
   DB_USERNAME=your_db_username
   DB_PASSWORD=your_db_password
   DB_HOST=your_db_host
   DB_PORT=5432
   DB_NAME=organization_management_db
   JWT_SECRET=your_jwt_secret
   PORT=3000
   ```

4. **Initialize the database:**

   Ensure your PostgreSQL server is running and the credentials in your `.env` file are correct. Then, synchronize the database with:

   ```bash
   npx sequelize-cli db:migrate
   ```

5. **Start the server:**

   ```bash
   npm start
   ```

## Usage

### User Registration

- **Endpoint:** `POST /api/auth/register`
- **Request Body:**
  ```json
  {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "password": "yourpassword",
    "phone": "1234567890"
  }
  ```

### User Login

- **Endpoint:** `POST /api/auth/login`
- **Request Body:**
  ```json
  {
    "email": "john.doe@example.com",
    "password": "yourpassword"
  }
  ```

### Create an Organization

- **Endpoint:** `POST /api/organisations`
- **Headers:** `Authorization: Bearer <your_jwt_token>`
- **Request Body:**
  ```json
  {
    "name": "My New Organization",
    "description": "Description of the organization"
  }
  ```

### Get All Organizations

- **Endpoint:** `GET /api/organisations`
- **Headers:** `Authorization: Bearer <your_jwt_token>`

### Get a Single Organization

- **Endpoint:** `GET /api/organisations/:orgId`
- **Headers:** `Authorization: Bearer <your_jwt_token>`

### Add a User to an Organization

- **Endpoint:** `POST /api/organisations/:orgId/users`
- **Headers:** `Authorization: Bearer <your_jwt_token>`
- **Request Body:**
  ```json
  {
    "userId": "user-id-to-add"
  }
  ```