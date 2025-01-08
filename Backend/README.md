# User Registration Endpoint

## POST /users/register

### Description
This endpoint allows a new user to register by providing their first name, last name, email, and password.

### Request Body
The request body should be a JSON object containing the following fields:
- `fullname`: An object containing:
  - `firstname` (string, required): The user's first name (minimum 3 characters).
  - `lastname` (string, optional): The user's last name (minimum 3 characters).
- `email` (string, required): The user's email address (must be a valid email).
- `password` (string, required): The user's password (minimum 6 characters).

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses
When a user successfully registers, the response from the /register endpoint will include the user data and a token. Here is an example of what the response might look like:
{
    "data": {
        "_id": "60d0fe4f5311236168a109ca",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "socketId": null
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}

#### Success
- **Status Code**: 201 Created
- **Body**:
  ```json
  {
    "data": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "socketId": null
    },
    "token": "jwt_token"
  }
  ```

#### Validation Errors
- **Status Code**: 400 Bad Request
- **Body**:
  ```json
  {
    "errors": [
      {
        "msg": "First name must be at least 3 characters long",
        "param": "fullname.firstname",
        "location": "body"
      },
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "Password must be at least 6 characters long",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

### Notes
- The `email` field must be unique.
- The `password` field is hashed before being stored in the database.

# User Login Endpoint

## POST /users/login

### Description
This endpoint allows a user to log in by providing their email and password.

### Request Body
The request body should be a JSON object containing the following fields:
- `email` (string, required): The user's email address (must be a valid email).
- `password` (string, required): The user's password (minimum 6 characters).

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses
When a user successfully logs in, the response from the /login endpoint will include the user data and a token. Here is an example of what the response might look like:
{
    "data": {
        "_id": "60d0fe4f5311236168a109ca",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "socketId": null
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}

#### Success
- **Status Code**: 200 OK
- **Body**:
  ```json
  {
    "data": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "socketId": null
    },
    "token": "jwt_token"
  }
  ```

#### Validation Errors
- **Status Code**: 400 Bad Request
- **Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "Password must be at least 6 characters long",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

#### Authentication Errors
- **Status Code**: 401 Unauthorized
- **Body**:
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

### Notes
- The `email` field must be registered.
- The `password` field is compared with the hashed password stored in the database.

# User Profile Endpoint

## GET /users/profile

### Description
This endpoint allows a logged-in user to retrieve their profile information.

### Responses
When a user successfully retrieves their profile, the response from the /profile endpoint will include the user data. Here is an example of what the response might look like:
{
    "data": {
        "_id": "60d0fe4f5311236168a109ca",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "socketId": null
    }
}

#### Success
- **Status Code**: 200 OK
- **Body**:
  ```json
  {
    "data": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "socketId": null
    }
  }
  ```

#### Authentication Errors
- **Status Code**: 401 Unauthorized
- **Body**:
  ```json
  {
    "message": "Authentication required"
  }
  ```

### Notes
- The user must be logged in to access this endpoint.

# User Logout Endpoint

## POST /users/logout

### Description
This endpoint allows a logged-in user to log out.

### Responses
When a user successfully logs out, the response from the /logout endpoint will include a success message.

#### Success
- **Status Code**: 200 OK
- **Body**:
  ```json
  {
    "message": "Successfully logged out"
  }
  ```

#### Authentication Errors
- **Status Code**: 401 Unauthorized
- **Body**:
  ```json
  {
    "message": "Authentication required"
  }
  ```

### Notes
- The user must be logged in to access this endpoint.

# Captain Registration Endpoint

## POST /captains/register

### Description
This endpoint allows a new captain to register by providing their first name, last name, email, password, and vehicle details.

### Request Body
The request body should be a JSON object containing the following fields:
```json
{
  "fullname": {
    "firstname": "John", // string, required, minimum 3 characters
    "lastname": "Doe" // string, required, minimum 3 characters
  },
  "email": "john.doe@example.com", // string, required, must be a valid email
  "password": "password123", // string, required, minimum 6 characters
  "vehicle": {
    "color": "red", // string, required, minimum 3 characters
    "plate": "ABC123", // string, required, minimum 3 characters
    "capacity": 4, // number, required, minimum 1
    "vehicleType": "car" // string, required, must be one of 'car', 'motorcycle', 'auto'
  }
}
```

### Responses
When a captain successfully registers, the response from the /register endpoint will include the captain data. Here is an example of what the response might look like:
```json
{
  "data": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

#### Success
- **Status Code**: 201 Created
- **Body**:
  ```json
  {
    "data": {
      "_id": "captain_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "vehicle": {
        "color": "red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
  }
  ```

#### Validation Errors
- **Status Code**: 400 Bad Request
- **Body**:
  ```json
  {
    "errors": [
      {
        "msg": "First name must be at least 3 characters long",
        "param": "fullname.firstname",
        "location": "body"
      },
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "Password must be at least 6 characters long",
        "param": "password",
        "location": "body"
      },
      {
        "msg": "Color must be at least 3 characters long",
        "param": "vehicle.color",
        "location": "body"
      },
      {
        "msg": "Plate must be at least 3 characters long",
        "param": "vehicle.plate",
        "location": "body"
      },
      {
        "msg": "Capacity must be at least 1",
        "param": "vehicle.capacity",
        "location": "body"
      },
      {
        "msg": "Invalid Vehicle Type",
        "param": "vehicle.vehicleType",
        "location": "body"
      }
    ]
  }
  ```

### Notes
- The `email` field must be unique.
- The `password` field is hashed before being stored in the database.

# Captain Login Endpoint

## POST /captains/login

### Description
This endpoint allows a captain to log in by providing their email and password.

### Request Body
The request body should be a JSON object containing the following fields:
```json
{
  "email": "john.doe@example.com", // string, required, must be a valid email
  "password": "password123" // string, required, minimum 6 characters
}
```

### Responses
When a captain successfully logs in, the response from the /login endpoint will include the captain data and a token. Here is an example of what the response might look like:
```json
{
  "data": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### Success
- **Status Code**: 200 OK
- **Body**:
  ```json
  {
    "data": {
      "_id": "captain_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "vehicle": {
        "color": "red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      }
    },
    "token": "jwt_token"
  }
  ```

#### Validation Errors
- **Status Code**: 400 Bad Request
- **Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "Password must be at least 6 characters long",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

#### Authentication Errors
- **Status Code**: 401 Unauthorized
- **Body**:
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

### Notes
- The `email` field must be registered.
- The `password` field is compared with the hashed password stored in the database.

# Captain Profile Endpoint

## GET /captains/profile

### Description
This endpoint allows a logged-in captain to retrieve their profile information.

### Responses
When a captain successfully retrieves their profile, the response from the /profile endpoint will include the captain data. Here is an example of what the response might look like:
```json
{
  "data": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

#### Success
- **Status Code**: 200 OK
- **Body**:
  ```json
  {
    "data": {
      "_id": "captain_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "vehicle": {
        "color": "red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
  }
  ```

#### Authentication Errors
- **Status Code**: 401 Unauthorized
- **Body**:
  ```json
  {
    "message": "Authentication required"
  }
  ```

### Notes
- The captain must be logged in to access this endpoint.

# Captain Logout Endpoint

## POST /captains/logout

### Description
This endpoint allows a logged-in captain to log out.

### Responses
When a captain successfully logs out, the response from the /logout endpoint will include a success message.

#### Success
- **Status Code**: 200 OK
- **Body**:
  ```json
  {
    "message": "Successfully logged out"
  }
  ```

#### Authentication Errors
- **Status Code**: 401 Unauthorized
- **Body**:
  ```json
  {
    "message": "Authentication required"
  }
  ```

### Notes
- The captain must be logged in to access this endpoint.