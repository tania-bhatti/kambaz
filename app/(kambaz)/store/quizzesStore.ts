"use client"

import { create } from "zustand"; 
import quizzesJson from "../database/quizzes.json"; 

const today = new Date().toISOString().slice(0, 16);

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
  description: string;
  quizType: string;
  assignmentGroup: string;
  shuffleAnswers: boolean;
  timeLimit: number;
  multipleAttempts: boolean;
  howManyAttempts: number;
  showCorrectAnswers: string;
  accessCode: string;
  oneQuestionAtATime: boolean;
  webcamRequired: boolean;
  lockQuestionsAfterAnswering: boolean;
}

type QuizzesStore = {
  quizzes: Quiz[];
  addQuiz: (quiz: Partial<Omit<Quiz, "_id">> & { title: string; course: string }) => void;
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
          points: 0,
          numQuestions: 0,
          available: today,
          due: today,
          until: today,
          published: false,
          description: "",
          quizType: "Graded Quiz",
          assignmentGroup: "Quizzes",
          shuffleAnswers: true,
          timeLimit: 20,
          multipleAttempts: false,
          howManyAttempts: 1,
          showCorrectAnswers: "After due date",
          accessCode: "",
          oneQuestionAtATime: true,
          webcamRequired: false,
          lockQuestionsAfterAnswering: false, 
          ...quiz,
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
      quizzes: state.quizzes.map((q) => (q._id === quizId ? {...q, published: !q.published} : q)),
    }))
}));