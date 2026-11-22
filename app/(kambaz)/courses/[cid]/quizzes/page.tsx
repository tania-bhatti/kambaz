"use client"

import { FaSearch } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { IoMdMore } from "react-icons/io";
import QuizItem from "./QuizItem";
import { useParams, useRouter } from "next/navigation";
import { useAccountContext } from "@/app/(kambaz)/account/AccountContext";
import { useQuizzesStore } from "@/app/(kambaz)/store/quizzesStore";
import { useState } from "react";

export default function Quizzes() { 
  const [sortBy, setSortBy] = useState("none"); 
  const [menuOpen, setMenuOpen] = useState(false);
  const { currentUser } = useAccountContext(); 
  const isFaculty = currentUser?.role === "FACULTY"; 
  const { cid } = useParams<{ cid: string }>(); 
  const allQuizzes = useQuizzesStore((state) => state.quizzes); 
  const quizzes = allQuizzes.filter((q) => q.course === cid); 
  const sortedQuizzes = quizzes.toSorted((a, b) => {
    if (sortBy === "title") return a.title.localeCompare(b.title); 
    if (sortBy === "due") return a.due.localeCompare(b.due); 
    if (sortBy === "available") return a.available.localeCompare(b.available); 
    return 0;
  });
  const router = useRouter(); 
  return (
    <div id="wd-quizzes">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2"> 
        <div className="relative">
          <FaSearch className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-neutral-500" />
          <input 
            placeholder="Search for Quiz"
            id="wd-search-quiz"
            className="rounded border py-1.5 pr-3 pl-9 text-sm"
          />
        </div>
        {/* {isFaculty && ( */}
          <div className="flex gap-2">
            <button 
              id="wd-add-quiz"
              type="button"
              className="inline-flex items-center gap-1 rounded border border-red-900 px-3 py-1.5 text-sm bg-red-700 text-white cursor-pointer"
              onClick={() => router.push(`/courses/${cid}/quizzes/new`)}
            >
              <GoPlus className="size-5"/> Quiz
            </button> 
            <button 
              id="wd-more-quiz"
              type="button"
              className="inline-flex items-center gap-1 border border-gray-300 rounded cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <IoMdMore className="size-5"/>
            </button>
            <div className="relative">
              {menuOpen && (
                <div className="flex flex-col w-[170px] border border-gray-300 absolute gap-1 right-0 top-10 z-10 bg-white rounded px-3 py-5">
                  <button 
                    id="wd-menu-sort-name"
                    className="w-full text-left bg-transparent border-0 cursor-pointer"
                    onClick={() => {
                      setSortBy("title");
                      setMenuOpen(false);
                    }}
                    title="Sort by name"
                  >
                    Sort by Name
                  </button>
                  <button 
                    id="wd-menu-sort-due"
                    className="w-full text-left bg-transparent border-0 cursor-pointer"
                    onClick={() => {
                      setSortBy("due");
                      setMenuOpen(false);
                    }}
                    title="Sort by due date"  
                  >
                    Sort by Due Date
                  </button>
                  <button 
                    id="wd-menu-sort-available"
                    className="w-full text-left bg-transparent border-0 cursor-pointer"
                    onClick={() => {
                      setSortBy("available");
                      setMenuOpen(false);
                    }}
                    title="Sort by available date"
                  >
                    Sort by Available Date 
                  </button>
                  <button 
                    id="wd-menu-sort-none"
                    className="w-full text-left bg-transparent border-0 cursor-pointer"
                    onClick={() => {
                      setSortBy("none");
                      setMenuOpen(false);
                    }}
                    title="Sort by none"
                  >
                    Sort by None 
                  </button>
                </div>
              )}
            </div>
          </div>
        {/* )} */}
      </div>
      <hr />
      <div className="wd-quiz mb-5 border border-neutral-400 p-0 text-xl">
        <div className="wd-title flex items-center justify-between bg-neutral-200 p-3 ps-2 font-semibold">
          Assignment Quizzes
        </div>
        {quizzes.length === 0 
          ? <span>No quizzes. Click + Quiz to add one</span> 
          : <ul id="wd-quiz-list" className="m-0 list-none p-0">
            {sortedQuizzes.map((quiz) => (
              <QuizItem 
                key={quiz._id}
                cid={cid}
                qid={quiz._id}
                title={quiz.title}
                points={quiz.points}
                numQuestions={quiz.numQuestions}
                available={quiz.available}
                due={quiz.due}
                until={quiz.until}
                published={quiz.published}
                />
            ))}
          </ul>
        }
      </div>
    </div>
  );
}
