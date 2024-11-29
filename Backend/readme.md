# **User Registration API Documentation**

## **Overview**
The `user/register` endpoint allows new users to register by providing their first name, last name, email, and password. This API performs input validation, checks for existing users, securely hashes passwords, stores user information in the database, and generates a JWT for authentication.

---

## **Endpoint Details**

### **HTTP Method**: `POST`

### **Endpoint URL**: `/user/register`

---

## **Request Details**

### **Headers**
- **`Content-Type`**: `application/json`




# Login Route Documentation

## Endpoint

**POST** `/api/login`

## Description

This endpoint allows users to log in by providing their email and password. If the provided credentials are valid, it returns an authentication token and user details.

## Request

### Request Body

The body of the request must be in JSON format and include the following fields:

| Field    | Type   | Description                                 | Required |
|----------|--------|---------------------------------------------|----------|
| `email`  | String | The email address of the user               | Yes      |
| `password` | String | The password of the user (min length: 4) | Yes      |

#### Example Request Body

```json
{
  "email": "user@example.com",
  "password": "securepassword123"
}
```











## Captain Registration API Documentation

## **Endpoint**
`POST /captains/register`

---

## **Description**
Registers a new captain by saving their information, including personal details and vehicle information, to the database. The endpoint also hashes the password and generates a JWT token upon successful registration.

---

## **Request Headers**
| Key            | Value              | Required |
| -------------- | ------------------ | -------- |
| `Content-Type` | `application/json` | Yes      |

---

## **Request Body**
```json
{
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "securepassword123",
    "vahicle": {
        "color": "Blue",
        "plate": "XYZ-1234",
        "capacity": 4,
        "vahicleType": "car"
    }
}
```
## Request Parameters

| Field                 | Type   | Description                            | Required | Constraints                                |
|-----------------------|--------|----------------------------------------|----------|--------------------------------------------|
| `fullname.firstname`  | String | First name of the captain             | Yes      | Minimum 3 characters                       |
| `fullname.lastname`   | String | Last name of the captain              | Optional | Minimum 3 characters if provided           |
| `email`               | String | Email address of the captain          | Yes      | Must be a valid email format and unique    |
| `password`            | String | Password for captain's account        | Yes      | Minimum 6 characters                       |
| `vahicle.color`       | String | Color of the vehicle                  | Yes      | Minimum 3 characters                       |
| `vahicle.plate`       | String | License plate of the vehicle          | Yes      | Minimum 3 characters                       |
| `vahicle.capacity`    | Number | Capacity of the vehicle               | Yes      | Minimum value: 1                           |
| `vahicle.vahicleType` | String | Type of the vehicle                   | Yes      | Must be one of `car`, `motorcycle`, `auto`, `toto` |
---



# Response
### Success Response
#### Status Code: 201 Created
## Example Response Body:
```
json
Copy code
{
    "message": "Captain registered successfully",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "captain": {
        "_id": "64c9f8812a7f1e0012b3b345",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "status": "inactive",
        "vahicle": {
            "color": "Blue",
            "plate": "XYZ-1234",
            "capacity": 4,
            "vahicleType": "car"
        },
        "location": null
    }
}
```
# Error Responses
## 1. Validation Errors
### Status Code: 400 Bad Request
### Example Response Body:
```
json
Copy code
{
    "error": "Validation Error",
    "details": [
        {
            "field": "email",
            "message": "Email is already in use"
        },
        {
            "field": "password",
            "message": "Password must be at least 6 characters long"
        }
    ]
}
```


##