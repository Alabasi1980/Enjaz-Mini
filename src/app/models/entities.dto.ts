
export type Role = 'Admin' | 'Manager' | 'Employee';

export interface User {
  id: number;
  name: string;
  email: string;
  role: Role;
  departmentId: number;
}

export interface Department {
  id: number;
  name: string;
  circleId: number;
}

export interface Circle {
  id: number;
  name: string;
}

export interface Status {
  id: number;
  name: string;
  color: string; // e.g., 'blue', 'green', 'red' for css modifiers
}

export interface Priority {
  id: number;
  name: string;
  level: number; // e.g., 1 for low, 5 for critical
}

export interface Ticket {
  id: number;
  title: string;
  description: string;
  statusId: number;
  priorityId: number;
  assignedToId?: number;
  createdBy: number;
  createdAt: string; // ISO string date
}

// Interfaces for other entities can be added here
export interface Task {
    id: number;
    title: string;
    // ... other properties
}

export interface Complaint {
    id: number;
    title: string;
    // ... other properties
}

export interface Suggestion {
    id: number;
    title: string;
    // ... other properties
}