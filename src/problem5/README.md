# Express TypeScript Product API

A RESTful CRUD API built with Express.js, TypeScript, and PostgreSQL for managing products.

## Tech Stack

- Express.js
- TypeScript
- PostgreSQL
- TypeORM
- Node.js

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

## Installation & Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables in `.env`:
   ```env
   PORT=3000
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=postgres
   DB_PASSWORD=your_password
   DB_NAME=product_db
   ```

4. Create PostgreSQL database:
   ```sql
   CREATE DATABASE product_db;
   ```

5. Build and run:
   ```bash
   # Development
   npm run dev

   # Production
   npm run build
   npm start
   ```

## API Documentation

### Create Product
- **Endpoint:** `POST /api/products`
- **Description:** Create a new product
- **Request Body:**
  ```json
  {
    "name": "iPhone 13",
    "description": "Latest iPhone model",
    "price": 999.99
  }
  ```
- **Success Response (201):**
  ```json
  {
    "id": 1,
    "name": "iPhone 13",
    "description": "Latest iPhone model",
    "price": 999.99,
    "createdAt": "2024-03-15T10:30:00.000Z"
  }
  ```
- **Error Response (500):**
  ```json
  {
    "error": "Error creating product"
  }
  ```

### Get All Products
- **Endpoint:** `GET /api/products`
- **Description:** Retrieve all products with optional filters
- **Query Parameters:**
  - `minPrice` (number, optional): Minimum price filter
  - `maxPrice` (number, optional): Maximum price filter
- **Example:** `/api/products?minPrice=100&maxPrice=1000`
- **Success Response (200):**
  ```json
  [
    {
      "id": 1,
      "name": "iPhone 13",
      "description": "Latest iPhone model",
      "price": 999.99,
      "createdAt": "2024-03-15T10:30:00.000Z"
    },
    {
      "id": 2,
      "name": "Samsung Galaxy S21",
      "description": "Android flagship phone",
      "price": 899.99,
      "createdAt": "2024-03-15T11:00:00.000Z"
    }
  ]
  ```
- **Error Response (500):**
  ```json
  {
    "error": "Error fetching products"
  }
  ```

### Get Product by ID
- **Endpoint:** `GET /api/products/:id`
- **Description:** Retrieve a specific product by ID
- **Parameters:** 
  - `id` (path parameter): Product ID
- **Success Response (200):**
  ```json
  {
    "id": 1,
    "name": "iPhone 13",
    "description": "Latest iPhone model",
    "price": 999.99,
    "createdAt": "2024-03-15T10:30:00.000Z"
  }
  ```
- **Error Responses:**
  - Not Found (404):
    ```json
    {
      "error": "Product not found"
    }
    ```
  - Server Error (500):
    ```json
    {
      "error": "Error fetching product"
    }
    ```

### Update Product
- **Endpoint:** `PUT /api/products/:id`
- **Description:** Update an existing product
- **Parameters:**
  - `id` (path parameter): Product ID
- **Request Body:** (all fields optional)
  ```json
  {
    "name": "iPhone 13 Pro",
    "description": "Updated description",
    "price": 1099.99
  }
  ```
- **Success Response (200):**
  ```json
  {
    "id": 1,
    "name": "iPhone 13 Pro",
    "description": "Updated description",
    "price": 1099.99,
    "createdAt": "2024-03-15T10:30:00.000Z"
  }
  ```
- **Error Responses:**
  - Not Found (404):
    ```json
    {
      "error": "Product not found"
    }
    ```
  - Server Error (500):
    ```json
    {
      "error": "Error updating product"
    }
    ```

### Delete Product
- **Endpoint:** `DELETE /api/products/:id`
- **Description:** Delete a product
- **Parameters:**
  - `id` (path parameter): Product ID
- **Success Response (200):**
  ```json
  {
    "message": "Delete success"
  }
  ```
- **Error Responses:**
  - Not Found (404):
    ```json
    {
      "error": "Product not found"
    }
    ```
  - Server Error (500):
    ```json
    {
      "error": "Error deleting product"
    }
    ```

## Error Handling

The API returns appropriate HTTP status codes:
- 200: Success
- 201: Created
- 404: Not Found
- 500: Server Error

## Development

```bash
# Run in development mode
npm run dev

# Build TypeScript
npm run build

# Run in production
npm start
```

## Database Schema

The Product entity contains the following fields:
- `id`: Primary key, auto-increment
- `name`: String
- `description`: String
- `price`: Decimal
- `createdAt`: Date
