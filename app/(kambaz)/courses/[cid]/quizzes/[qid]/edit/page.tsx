"use client" 

import { useParams, useRouter} from "next/navigation";
import { useQuizzesStore } from "@/app/(kambaz)/store/quizzesStore";
import QuizDetailsEditor from "./QuizDetailsEditor";
import { MdBlock } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";

export default function QuizEditor() {
  const { cid, qid } = useParams<{ cid: string, qid: string}>();
  const router = useRouter(); 
  const { quizzes, addQuiz, updateQuiz } = useQuizzesStore(); 
  const quiz = quizzes.find((q) => q._id === qid); 
  if (!quiz) return <div>Quiz not found</div>;
  return (
    <div className="w-[600px] mt-5 ms-5">
      <div className="flex items-center justify-end gap-4 mb-3">
        <span className="text-lg text-gray-700">Points {quiz.points}</span>

        {quiz.published
          ? <div className="flex items-center gap-1 text-green-700 font-semibold">
              <IoIosCheckmarkCircle className="shrink-0 size-5" />
              <span>Published</span>
            </div>
          : <div className="flex items-center gap-1 text-gray-500 font-semibold">
              <MdBlock className="shrink-0 size-5" />
              <span>Not Published</span>
            </div>
        }
      </div>
      <hr />
      <QuizDetailsEditor quiz={quiz} />
    </div>
  );
}