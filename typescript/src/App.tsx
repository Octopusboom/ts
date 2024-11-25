import React, { useState } from 'react';
import './App.css';
import Enums from './components/Enums';
import Interfaces from './components/Interfaces';
import Counter from './components/Classes'

// importing external types and interfaces
// import { User, Product, Admin, GreetFunction, Status } from "./types/Definitions";


// What is TypeScript?
// - Superset of JavaScript (TypeScript builds upon JavaScript by adding new features)
// - Adds static typing
// - Improves developer experience and code quality

// Install React with Typescript
// npx create-react-app your-project-name --template typescript

// Add TypeScript to an Existing Project
// npm install typescript @types/node @types/react @types/react-dom @types/jest
// Rename .js files to .tsx for components.


// Basic types in TypeScript (Annotations):
const age: number = 25;
const name: string = "John";
const isStudent: boolean = true;
const hobbies: string[] = ["reading", "gaming", "music"];

// Functions
const add = (a: number, b: number): number => a + b;

type Greet = (name: string) => string;
const greet: Greet = (name) => `Hello, ${name}`;

// Tuples
// Purpose: Define arrays with fixed lengths and types.
const coordinates: [number, number] = [10, 20];


// Type Assertions
// const input = document.getElementById("input") as HTMLInputElement; // Trebuie comentat ca altfel crapa component pentru ca va cauta un input cu id-ul mentionat
// input.value = "Hello";


// Type Guards
// unknown is a type-safe way of saying "this value could be anything" but requires you to explicitly narrow it before using it.
function isString(value: unknown): value is string {
  return typeof value === "string";
}

// Conditional Types
type IsString<T> = T extends string ? true : false;
type Result = IsString<"hello">; // true
type Result2 = IsString<42>; // false

// Never type
// Represents values that never occur. It is used when a function:
// Never successfully returns (e.g., it always throws an error or enters an infinite loop).
// Is guaranteed to terminate the program or not produce a usable value.

function throwError(message: string): never {
  throw new Error(message);
}

// Ex
// type Shape = "circle" | "square";

// function getArea(shape: Shape): number {
//   switch (shape) {
//     case "circle":
//       return Math.PI * 2; // Example calculation
//     case "square":
//       return 4 * 4; // Example calculation
//     default:
//       // This block should never be reached
//       return assertUnreachable(shape);
//   }
// }

// If a new shape is added and not accounted for, TypeScript will throw an error during development.
// function assertUnreachable(value: never): never {
//   throw new Error(`Unexpected value: ${value}`);
// }



// Enum for user roles
enum UserRole {
  Admin = "Admin",
  User = "User",
  Guest = "Guest",
}

// Interface for props
interface UserProps {
  id: number | string;
  name: string;
  role: UserRole;
  isActive?: boolean;
}

// Union type for button actions
type ButtonAction = "increment" | "decrement" | "reset";


function App() {
  // State example with type annotations
  const [count, setCount] = useState<number>(0);
  const [user, setUser] = useState<UserProps>({
    id: 1,
    name: "Jane Doe",
    role: UserRole.User,
    isActive: true,
  });


  // The void type is used to indicate that a function does not return any value. 
  // When you see void in a function's type annotation, it means that the function performs some action.
  const handleButtonClick = (action: ButtonAction): void => {
    switch (action) {
      case "increment":
        setCount((prev) => prev + 1);
        break;
      case "decrement":
        setCount((prev) => (prev > 0 ? prev - 1 : 0));
        break;
      case "reset":
        setCount(0);
        break;
      default:
        break;
    }
  };

  // Function to toggle user activity status
  const toggleUserActiveStatus = (): void => {
    setUser((prevUser) => ({ ...prevUser, isActive: !prevUser.isActive }));
  };

  return (
    <div className="App">
      <h1>TypeScript in React</h1>
      <p>Age: {age}</p>
      <p>Name: {name}</p>
      <p>Is Student: {isStudent ? "Yes" : "No"}</p>
      <p>Hobbies: {hobbies.join(", ")}</p>

      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => handleButtonClick("increment")}>Increment</button>
      <button onClick={() => handleButtonClick("decrement")}>Decrement</button>
      <button onClick={() => handleButtonClick("reset")}>Reset</button>

      <h2>User</h2>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Role: {user.role}</p>
      <p>Status: {user.isActive ? "Active" : "Inactive"}</p>
      <button onClick={toggleUserActiveStatus}>
        {user.isActive ? "Deactivate" : "Activate"}
      </button>

      <Enums />
      <Interfaces />
      <Counter />
    </div>
  );
}

export default App;
