"use client"

import { useParams, useRouter} from "next/navigation";
import { useAccountContext } from "@/app/(kambaz)/account/AccountContext";
import { useQuizzesStore } from "@/app/(kambaz)/store/quizzesStore";
import dateToString from "../date";
import { FaPencilAlt } from "react-icons/fa";

function DetailRow({ label, value }: { label: string, value: string | number }) {
  return (
    <>
      <dt className="text-right font-semibold">{label}</dt> 
      <dd className="ms-3">{value}</dd>
    </>
  );
}

function StudentQuizDetails({ label, value }: { label: string, value: string | number }) {
  return (
    <div className="text-lg">
      <span className="font-semibold">{label}</span> {value}
    </div>
  )
}

export default function QuizDetails() {
  const { cid, qid } = useParams<{ cid: string, qid: string}>();
  const quizzes = useQuizzesStore((state) => state.quizzes); 
  const quiz = quizzes.find((q) => q._id === qid); 
  const { currentUser } = useAccountContext(); 
  const isFaculty = currentUser?.role === "FACULTY"; 
  const router = useRouter();
  const boolToHtml = (b?: boolean) => b ? "Yes" : "No";
  if (!quiz) return <div>Quiz not found</div>;
  const availableDate = new Date(quiz.available); 
  const dueDate = new Date(quiz.due); 
  const untilDate = new Date(quiz.until); 

  return (
    <div>
      <h1>{quiz.title}</h1> 
      {/* Should be {isFaculty}, remove ! when done */}
      {!isFaculty ? (
      <>
        <dl className="grid grid-cols-[max-content_1fr] gap-x-0 gap-y-2">
          <DetailRow label="Quiz Type" value={quiz.quizType} />
          <DetailRow label="Points" value={quiz.points} />
          <DetailRow label="Assignment Group" value={quiz.assignmentGroup} />
          <DetailRow label="Shuffle Answers" value={boolToHtml(quiz.shuffleAnswers)} />
          <DetailRow label="Time Limit" value={quiz.timeLimit + " Minutes"} />
          <DetailRow label="Multiple Attempts" value={boolToHtml(quiz.multipleAttempts)} />
          <DetailRow label="How Many Attempts" value={quiz.howManyAttempts} />
          <DetailRow label="Show Correct Answers" value={quiz.showCorrectAnswers} />
          <DetailRow label="Access Code" value={quiz.accessCode} />
          <DetailRow label="One Question at a Time" value={boolToHtml(quiz.oneQuestionAtATime)} />
          <DetailRow label="Webcam Required" value={boolToHtml(quiz.webcamRequired)} />
          <DetailRow label="Lock Questions After Answering" value={boolToHtml(quiz.lockQuestionsAfterAnswering)} />
        </dl>
        <table className="w-[800px] border-collapse text-left">
          <thead className="border-b-1 border-gray-400">
            <tr>
              <th>
                Due
              </th>
              <th>
                For
              </th>
              <th>
                Available from
              </th>
              <th>
                Until
              </th>
            </tr>
          </thead>
          <tbody className="border-b-1 border-gray-400">
            <tr>
              <td className="py-3 pr-15">
                {dateToString(dueDate)}
              </td>
              <td className="py-3 pr-15">
                Everyone
              </td>
              <td className="py-3 pr-15">
                {dateToString(availableDate)}
              </td>
              <td className="py-3 pr-15">
                {dateToString(untilDate)}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex items-center gap-3 mt-5">
          <button 
            className="bg-gray-50 border border-gray-300 rounded-xs text-sm text-gray-600 px-3 py-1 cursor-pointer"
            onClick={() => router.push(`/courses/${cid}/quizzes/${qid}/preview`)}
          >
            Preview
          </button>
          <button 
            className="inline-flex items-center gap-1 bg-gray-50 border border-gray-300 rounded-xs text-sm text-gray-600 px-3 py-1 cursor-pointer"
            onClick={() => router.push(`/courses/${cid}/quizzes/${qid}/edit`)}
          >
            <FaPencilAlt /> <span>Edit</span>
          </button>
        </div>
      </>
      ) : (
      <>
        <div className="w-[800px]">
          <hr />
          <div className="flex gap-10">
            <StudentQuizDetails label="Due" value={dateToString(dueDate)} />
            <StudentQuizDetails label="Points" value={quiz.points} />
            <StudentQuizDetails label="Questions" value={quiz.numQuestions} />
            <StudentQuizDetails label="Score" value="100" /> 
            {/* score shouldnt be hardcoded, edit later */}
          </div>
          <div className="flex gap-15">
            <StudentQuizDetails label="Available" value={`${dateToString(availableDate)} - ${dateToString(untilDate)}`} />
            <StudentQuizDetails label="Time Limit" value={quiz.timeLimit + " Minutes"} /> 
          </div>
          <hr />
        </div>
        <div className="w-[800px] flex justify-center">
           {/* button shouldnt appear if it's past the due date */}
          <button className="bg-red-700 border border-red-800 rounded-xs text-sm text-white px-3 py-1 cursor-pointer">
            Take the Quiz
          </button>
        </div>
      </>
      )}
    </div>
  );
}