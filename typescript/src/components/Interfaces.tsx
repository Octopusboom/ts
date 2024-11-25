import React from "react";

/**
 * Interfaces in TypeScript
 *
 * - Interfaces are used to define the structure of an object.
 * - They ensure that an object adheres to a specific shape.
 * - Interfaces are often used to define props for components or data structures.
 *
 * Features:
 * - Can define properties, optional properties, and readonly properties.
 * - Can be extended using inheritance (`extends`).
 *
 * Example use cases:
 * - Defining the structure of props in React components.
 * - Modeling data structures, such as user profiles or API responses.
 */

// Example 1: Basic Interface
interface User {
  id: number;
  name: string;
  email: string;
}

// Example 2: Interface with Optional Properties
interface Product {
  id: number;
  name: string;
  price: number;
  description?: string; // Optional property
}

// Example 3: Interface with Readonly Properties
interface ReadOnlyExample {
  readonly id: number; // Cannot be modified after initialization
  name: string;
}

// const user: ReadOnlyExample = {
//     id: 1,
//     name: "Alice",
//   };

//   user.name = "Bob"; // ✅ Allowed
//   user.id = 2; // ❌ Error: Cannot assign to 'id' because it is a read-only property.


// Example 4: Extending Interfaces
interface Admin extends User {
  role: string;
}

// Example 5: Using Interfaces for Function Types
interface GreetFunction {
  (name: string, age: number): string;
}

// Implementing GreetFunction
const greet: GreetFunction = (name, age) => {
  return `Hello, my name is ${name}, and I am ${age} years old.`;
};

const Interfaces = () => {
  // Example objects adhering to interfaces
  const user: User = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
  };

  const product: Product = {
    id: 101,
    name: "Laptop",
    price: 1299.99,
  };

  const admin: Admin = {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "Administrator",
  };

  return (
    <div>
      <h1>TypeScript Interfaces</h1>
      <p>
        Interfaces define the shape of objects, ensuring consistent structure and
        reducing runtime errors.
      </p>

      <h2>Examples:</h2>

      <div>
        <h3>1. Basic User Interface</h3>
        <p>
          User: <strong>{user.name}</strong>, Email: <strong>{user.email}</strong>
        </p>

        <h3>2. Product with Optional Description</h3>
        <p>
          Product: <strong>{product.name}</strong>, Price: <strong>${product.price}</strong>
        </p>

        <h3>3. Admin Extending User Interface</h3>
        <p>
          Admin: <strong>{admin.name}</strong>, Role: <strong>{admin.role}</strong>
        </p>

        <h3>4. Function Interface</h3>
        <p>{greet("Alice", 30)}</p>
      </div>
    </div>
  );
};

export default Interfaces;
