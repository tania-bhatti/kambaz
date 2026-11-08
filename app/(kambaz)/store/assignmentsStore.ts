"use client";

import { create } from "zustand";
import assignmentsJson from "../database/assignments.json";

export type Assignment = {
  _id: string; 
  title: string; 
  course: string; 
  description: string; 
  points: number; 
  due: string; 
  available: string;
}; 

type AssignmentsStore = {
  assignments: Assignment[]; 
  addAssignment: (assignment: {title: string, description: string, course: string, points: number, due: string, available: string}) => void; 
  deleteAssignment: (assignmentId: string) => void; 
  updateAssignment: (assignment: Assignment) => void; 
} 

export const useAssignmentsStore = create<AssignmentsStore>((set) => ({
  assignments: assignmentsJson as Assignment[],
  addAssignment: (assignment) =>
    set((state) => ({
      assignments: [
        ...state.assignments,
        {
          _id: crypto.randomUUID(), 
          title: assignment.title,
          course: assignment.course, 
          description: assignment.description, 
          points: assignment.points, 
          due: assignment.due, 
          available: assignment.available,
        },
      ],
      })),
    deleteAssignment: (assignmentId) => 
      set((state) => ({
        assignments: state.assignments.filter((a) => a._id !== assignmentId),
      })), 
    updateAssignment: (assignment) => 
      set((state) => ({
        assignments: state.assignments.map((a) => (a._id === assignment._id ? assignment : a)),
      }))
}));
