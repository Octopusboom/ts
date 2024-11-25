import React from "react";

/**
 * Enums in TypeScript
 *
 * - Enums are used to define a set of named constants.
 * - They make your code more readable and maintainable by replacing magic numbers or strings.
 * - Enums can be numeric or string-based.
 *
 * Example use cases:
 * - User roles (Admin, User, Guest)
 * - Application states (Loading, Success, Error)
 * - Color definitions (Primary, Secondary, Danger)
 */

// Example 1: String Enums
enum UserRole {
  Admin = "Admin",
  User = "User",
  Guest = "Guest",
}

// Example 2: Numeric Enums
enum StatusCode {
  Success = 200,
  NotFound = 404,
  ServerError = 500,
}

// Example 3: Enum for Colors
enum Colors {
  Primary = "#3498db",
  Secondary = "#2ecc71",
  Danger = "#e74c3c",
}

const Enums = () => {
  // Using the UserRole enum
  const userRole: UserRole = UserRole.Admin;

  // Using the StatusCode enum
  const status: StatusCode = StatusCode.Success;

  // Using the Colors enum
  const primaryColor: Colors = Colors.Primary;

  return (
    <div>
      <h1>TypeScript Enums</h1>
      <p>
        Enums allow you to define a set of named constants for better
        readability and maintainability.
      </p>
      <h2>Examples:</h2>
      <div>
        <h3>1. User Role</h3>
        <p>
          Current role: <strong>{userRole}</strong>
        </p>
        <h3>2. Status Code</h3>
        <p>
          Status code: <strong>{status}</strong>
        </p>
        <h3>3. Color Usage</h3>
        <p style={{ color: primaryColor }}>
          This text uses the primary color: <strong>{primaryColor}</strong>
        </p>
      </div>
    </div>
  );
};

export default Enums;
