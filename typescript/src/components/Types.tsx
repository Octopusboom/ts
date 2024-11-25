import React from "react";

/**
 * Types in TypeScript
 *
 * - Types allow you to define aliases for complex or simple data structures.
 * - They can represent objects, unions, intersections, primitives, or even functions.
 *
 * Features:
 * - Can alias primitives (`number`, `string`, etc.).
 * - Can define unions and intersections.
 * - Cannot extend like interfaces but can use intersections for similar behavior.
 * 
 * Example use cases:
 * - Representing multiple possible values (unions).
 * - Creating reusable types for API responses, data structures, or props.
 */

// Example 1: Primitive Type Alias
type ID = number | string; // Can be either a number or string

// Example 2: Union Types
type Status = "active" | "inactive" | "pending";

// Example 3: Intersection Types
type User = {
  id: number;
  name: string;
};

type Role = {
  role: string;
};

type Admin = User & Role; // Combines User and Role into one type

// Example 4: Type with Optional Properties
type Product = {
  id: number;
  name: string;
  price: number;
  description?: string; // Optional property
};

// Example 5: Function Type
type GreetFunction = (name: string, age: number) => string;

// Implementing GreetFunction
const greet: GreetFunction = (name, age) => {
  return `Hello, my name is ${name}, and I am ${age} years old.`;
};

// Example 6: Utility Types
type ReadOnlyProduct = Readonly<Product>; // Makes all properties readonly

const Types = () => {
  // Example objects adhering to types
  const user: User = {
    id: 1,
    name: "John Doe",
  };

  const product: Product = {
    id: 101,
    name: "Smartphone",
    price: 999.99,
  };

  const admin: Admin = {
    id: 2,
    name: "Jane Smith",
    role: "Administrator",
  };

  const readOnlyProduct: ReadOnlyProduct = {
    id: 202,
    name: "Tablet",
    price: 499.99,
  };

  // readOnlyProduct.price = 599.99; // ❌ Error: Cannot assign to 'price' because it is a read-only property.

  return (
    <div>
      <h1>TypeScript Types</h1>
      <p>
        Types allow you to define aliases for data structures, making your code more readable
        and reusable.
      </p>

      <h2>Examples:</h2>

      <div>
        <h3>1. Primitive Type Alias</h3>
        <p>
          Example ID: <strong>{user.id}</strong> (Can be a number or string)
        </p>

        <h3>2. Union Type for Status</h3>
        <p>
          Status: <strong>{"active"}</strong> (Can be "active", "inactive", or "pending")
        </p>

        <h3>3. Intersection Type</h3>
        <p>
          Admin: <strong>{admin.name}</strong>, Role: <strong>{admin.role}</strong>
        </p>

        <h3>4. Product with Optional Description</h3>
        <p>
          Product: <strong>{product.name}</strong>, Price: <strong>${product.price}</strong>
        </p>

        <h3>5. Read-Only Product</h3>
        <p>
          Read-Only Product: <strong>{readOnlyProduct.name}</strong>, Price: <strong>${readOnlyProduct.price}</strong>
        </p>

        <h3>6. Function Type</h3>
        <p>{greet("Alice", 30)}</p>
      </div>
    </div>
  );
};

export default Types;
