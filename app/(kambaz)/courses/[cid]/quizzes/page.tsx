"use client"
import { FaSearch } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { IoMdMore } from "react-icons/io";
import QuizItem from "./QuizItem";
import { useParams, useRouter } from "next/navigation";
import { useAccountContext } from "@/app/(kambaz)/account/AccountContext";
import { useQuizzesStore } from "@/app/(kambaz)/store/quizzesStore";

export default function Quizzes() { 
  const { currentUser } = useAccountContext(); 
  const isFaculty = currentUser?.role === "FACULTY"; 
  const { cid } = useParams<{ cid: string }>(); 
  const allQuizzes = useQuizzesStore((state) => state.quizzes); 
  const quizzes = allQuizzes.filter((q) => q.course === cid); 
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
            >
              <IoMdMore className="size-5"/>
            </button>
          </div>
        {/* )} */}
      </div>
      <hr />
      <div className="wd-quiz mb-5 overflow-hidden border border-neutral-400 p-0 text-xl">
        <div className="wd-title flex items-center justify-between bg-neutral-200 p-3 ps-2 font-semibold">
          Assignment Quizzes
        </div>
        <ul id="wd-quiz-list" className="m-0 list-none p-0">
          {quizzes.map((quiz) => (
            <QuizItem 
              key={quiz._id}
              cid={cid}
              qid={quiz._id}
              title={quiz.title}
              published={quiz.published}
              />
          ))}
        </ul>
      </div>
    </div>
  );
}
