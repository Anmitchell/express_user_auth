# User Authentication express application.

# API Routes (users routes coming soon)

| HTTP Method | Route              | Description                            |
| ----------- | ------------------ | -------------------------------------- |
| GET         | `/api/users`       | Retrieve a list of all users           |
| GET         | `/api/users/:id`   | Retrieve a specific user by ID         |
| POST        | `/api/users`       | Create a new user                      |
| PUT         | `/api/users/:id`   | Update an existing user by ID          |
| DELETE      | `/api/users/:id`   | Delete a user by ID                    |
| POST        | `/api/auth/login`  | Authenticate a user and return a token |
| POST        | `/api/auth/signup` | Register a new user                    |
