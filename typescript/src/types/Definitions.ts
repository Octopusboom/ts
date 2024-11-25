// types/Definitions.ts

// Type Alias for a union type
export type Status = "active" | "inactive" | "pending";

// Type Alias for a function type
export type GreetFunction = (name: string, age: number) => string;

// Interface for a User
export interface User {
  id: number;
  name: string;
  email: string;
}

// Interface for a Product with optional properties
export interface Product {
  id: number;
  name: string;
  price: number;
  description?: string; // Optional property
}

// Interface for an Admin that extends User
export interface Admin extends User {
  role: string;
}
