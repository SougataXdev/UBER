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
