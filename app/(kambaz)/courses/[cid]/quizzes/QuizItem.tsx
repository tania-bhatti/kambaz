"use client"

import Link from "next/link";
import { VscRocket } from "react-icons/vsc";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoMdMore } from "react-icons/io";
import { useQuizzesStore } from "@/app/(kambaz)/store/quizzesStore";
import { useState } from "react";
import dateToString from "./date";

export default function QuizItem({
  cid, qid, title, points, numQuestions, available, due, until, published
}: {
  cid: string, 
  qid: string, 
  title: string, 
  points: number, 
  numQuestions: number, 
  available: string, 
  due: string, 
  until: string, 
  published: boolean,
}) {
  const publishQuiz = useQuizzesStore((state) => state.publishQuiz);
  const deleteQuiz = useQuizzesStore((state) => state.deleteQuiz);
  const [menuOpen, setMenuOpen] = useState(false); 
  
  const current = new Date(); 
  const availableDate = new Date(available); 
  const dueDate = new Date(due); 
  const untilDate = new Date(until); 
  const isAvailable = availableDate > current 
    ? <><span className="font-bold">Not available until</span> {dateToString(availableDate)}</>
    : <span className="font-bold">Available</span>;
  const isClosed = untilDate < current 
    ? <span className="font-bold">Closed</span> 
    : isAvailable; 
  return (
    <li className="wd-quiz-list-item flex items-center gap-3 border border-neutral-300 border-l-[3px] border-l-green-600 bg-white p-3">
      <VscRocket className="mt-1 shrink-0 text-xl text-green-700" /> 
      <div className="flex-1">
        <Link 
          href={`/courses/${cid}/quizzes/${qid}`}
          className="wd-quiz-link font-semibold text-neutral-900 no-underline"
        >
          {title} 
        </Link>
        <div className="mt-1 text-sm text-neutral-600">{isClosed} | <span className="font-bold">Due</span> {dateToString(dueDate)} | {points} pts | {numQuestions} Questions</div>
      </div>
      <button
        id="wd-checkmark-quiz"
        type="button"
        className="inline-flex items-center gap-1 bg-transparent border-0 cursor-pointer"
        onClick={() => publishQuiz(qid)}
      >
        <IoIosCheckmarkCircle className={`mt-1 shrink-0 text-xl size-6 text-green-700 ${published ?  "opacity-100" : "opacity-50"}`}/>
      </button>
      <button 
        id="wd-menu-quiz"
        type="button"
        className="inline-flex items-center gap-1 bg-transparent border-0 cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <IoMdMore className="size-5"/>
      </button>
      <div className="relative">
        {menuOpen && (
          <div className="flex flex-col w-[150px] border border-gray-300 absolute gap-1 right-0 top-5 z-10 bg-white rounded px-3 py-5">
            <Link
              href={`/courses/${cid}/quizzes/${qid}`}
              className="wd-quiz-link text-black text-sm no-underline ps-1.5"
            >
              Edit quiz
            </Link>
            <button 
              id="wd-menu-delete"
              className="w-full text-left bg-transparent border-0 cursor-pointer"
              onClick={() => {
                deleteQuiz(qid); 
                setMenuOpen(false);
              }
                
              }
              title="Delete quiz"  
            >
              Delete
            </button>
            <button 
              id="wd-menu-publish"
              className="w-full text-left bg-transparent border-0 cursor-pointer"
              onClick={() => {
                publishQuiz(qid);
                setMenuOpen(false);
              }}
              title="Publish quiz"
            >
              {published ? "Unpublish" : "Publish"}
            </button>
          </div>
        )}
      </div>
    </li>
  );
}