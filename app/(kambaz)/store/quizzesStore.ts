"use client"

import { create } from "zustand"; 
import quizzesJson from "../database/quizzes.json"; 

export type Quiz = {
  _id: string; 
  title: string; 
  course: string; 
  points: number; 
  numQuestions: number;
  available: string; 
  due: string; 
  until: string; 
  published: boolean;
}

type QuizzesStore = {
  quizzes: Quiz[]; 
  addQuiz: (quiz: {title: string, course: string, points: number, numQuestions: number, available: string, due: string, until: string, published: boolean}) => void; 
  deleteQuiz: (quizId: string) => void; 
  updateQuiz: (quiz: Quiz) => void; 
  publishQuiz: (quizId: string) => void; 
}

export const useQuizzesStore = create<QuizzesStore>((set) => ({
  quizzes: quizzesJson as Quiz[], 
  addQuiz: (quiz) => 
    set((state) => ({
      quizzes: [
        ...state.quizzes, 
        {
          _id: crypto.randomUUID(), 
          title: quiz.title,
          course: quiz.course, 
          points: quiz.points, 
          numQuestions: quiz.numQuestions,
          available: quiz.available, 
          due: quiz.due, 
          until: quiz.until, 
          published: quiz.published,
        },
      ],
    })), 
  deleteQuiz: (quizId) => 
    set((state) => ({
      quizzes: state.quizzes.filter((q) => q._id !== quizId),
    })), 
  updateQuiz: (quiz) => 
    set((state) => ({
      quizzes: state.quizzes.map((q) => (q._id === quiz._id ? quiz : q)),
    })),
  publishQuiz: (quizId) => 
    set((state) => ({
      quizzes: state.quizzes.map((q) => (q._id === quizId ? {...q, published: true} : q)),
    }))
}));