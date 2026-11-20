import Link from "next/link";
import { VscRocket } from "react-icons/vsc";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoMdMore } from "react-icons/io";
import { useQuizzesStore } from "@/app/(kambaz)/store/quizzesStore";

export default function QuizItem({
  cid, qid, title, published
  // details, 
}: {
  cid: string, 
  qid: string, 
  title: string, 
  // points: number, 
  // numQuestions: number, 
  // available: string, 
  // due: string, 
  // until: string, 
  published: boolean,
}) {
  const publishQuiz = useQuizzesStore((state) => state.publishQuiz);
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
        <div className="mt-1 text-sm text-neutral-600"></div>
      </div>
      <IoIosCheckmarkCircle className={`mt-1 shrink-0 text-xl size-6 text-green-700 ${published ?  "opacity-100" : "opacity-50"}`}/>
      {/* onClick={() => publishQuiz(qid)}
        title="Publish quiz"
       */}
      {/* I dont think the circle check mark publishes it, you click the three dots next to it to publish it  */}
      <button 
        id="wd-menu-quiz"
        type="button"
        className="inline-flex items-center gap-1 bg-transparent border-0 cursor-pointer"
      >
        <IoMdMore className="size-5"/>
      </button>
    </li>
  );
}