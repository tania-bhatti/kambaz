"use client"

import Link from "next/link";
import { useParams, useRouter} from "next/navigation";
import { useState } from "react"; 
import { Quiz, useQuizzesStore } from "@/app/(kambaz)/store/quizzesStore";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineCalendarMonth } from "react-icons/md";

export default function QuizDetailsEditor({quiz} : {quiz: Quiz}) {
  const router = useRouter(); 
  const { updateQuiz } = useQuizzesStore();
  const [form, setForm] = useState(quiz);
  const save = () => {
    updateQuiz(form); 
    router.push(`/courses/${quiz.course}/quizzes/${quiz._id}`);
  } 
  const saveAndPublish = () => {
    updateQuiz({...form, published: true});
    router.push(`/courses/${quiz.course}/quizzes`);
  }
  const cancel = () => {
    router.push(`/courses/${quiz.course}/quizzes`);
  } 
  return (
    <div id="wd-quiz-details-editor">
      <input 
        id="wd-name" 
        className="rounded-xs border border-gray-300 py-2 pl-2 w-150 text-sm"
        value={form.title} 
        onChange={(e) => setForm({...form, title: e.target.value})} 
      />
      <div>
        <textarea
          id="wd-description"
          className="mt-4 mb-4 ps-3 pt-6 w-[600] rounded-xs border border-gray-300 text-sm"
          value={form.description} 
          onChange={(e) => setForm({...form, description: e.target.value})}
        >
        </textarea>
      </div>
      <div className="flex flex-col w-[600px]">
        <div className="flex justify-end">
          <div className="shrink-0 text-right">
            <label htmlFor="wd-quiz-type">Quiz Type</label>
          </div>
          <div className="relative">
            <select 
              id="wd-quiz-type" 
              className="appearance-none rounded-xs border border-gray-300 ms-2 mb-4 py-2 pl-2 w-110 text-sm"
              value={form.quizType}
              onChange={(e) => setForm({...form, quizType: e.target.value})}
            >
              <option value="Graded Quiz">Graded Quiz</option>
              <option value="Practice Quiz">Practice Quiz</option>
              <option value="Graded Survey">Graded Survey</option>
              <option value="Ungraded Survey">Ungraded Survey</option>
            </select>
            <IoIosArrowDown size={30} className="absolute right-1 top-1"/>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="shrink-0 text-right">
            <label htmlFor="wd-assignment-group">Assignment Group</label>
          </div>
          <div className="relative">
            <select 
              id="wd-assignment-group" 
              className="appearance-none rounded-xs border border-gray-300 ms-2 mb-4 py-2 pl-2 w-110 text-sm"
              value={form.assignmentGroup}
              onChange={(e) => setForm({...form, assignmentGroup: e.target.value})}
            >
              <option value="Quizzes">QUIZZES</option>
              <option value="Exams">EXAMS</option>
              <option value="Assignments">ASSIGNMENTS</option>
              <option value="Project">PROJECT</option>
            </select>
            <IoIosArrowDown size={30} className="absolute right-1 top-1"/>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="shrink-0 text-right">
            <label htmlFor="wd-show-correct-answers">Show Correct Answers</label>
          </div>
          <div className="relative">
            <select
              id="wd-show-correct-answers"
              className="appearance-none rounded-xs border border-gray-300 ms-2 mb-4 py-2 pl-2 w-110 text-sm"
              value={form.showCorrectAnswers}
              onChange={(e) => setForm({ ...form, showCorrectAnswers: e.target.value })}
            >
              <option value="Immediately">Immediately</option>
              <option value="After last attempt">After last attempt</option>
              <option value="After due date">After due date</option>
              <option value="Never">Never</option>
            </select>
            <IoIosArrowDown size={30} className="absolute right-1 top-1"/>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="ms-2 mb-4 p-3 w-110">
            <label className="font-semibold">Options</label>
            <div className="mt-2">
              <input 
                id="wd-time-limit"
                type="number"
                min={0}
                value={form.timeLimit ?? ""}
                className="w-[70px] px-2 py-2 border rounded-xs border-gray-300"
                onChange={(e) => setForm({ ...form, timeLimit: parseInt(e.target.value)})}
              />
              <label className="wd-time-limit ms-1">Minutes</label> 
            </div>
            <div className="mt-2">
              <input 
                id="wd-points"
                type="number" 
                min={0}
                value={form.points ?? ""}
                className="w-[70px] px-2 py-2 border rounded-xs border-gray-300"
                onChange={(e) => setForm({ ...form, points: parseInt(e.target.value)})}
                
              />
              <label className="wd-time-limit ms-1">Points</label> 
            </div>
            <div className="mt-2">
              <input
                id="wd-access-code"
                value={form.accessCode}
                className="w-[70px] px-1 py-1 border rounded-xs border-gray-300 text-sm"
                onChange={(e) => setForm({ ...form, accessCode: e.target.value })}
              />
              <label className="wd-time-limit ms-1">Access Code</label> 
            </div>
            <div className="mt-2">
              <input 
                id="wd-allow-multiple-attempts"
                type="checkbox"
                checked={form.multipleAttempts}
                onChange={(e) => setForm({ ...form, multipleAttempts: e.target.checked, howManyAttempts: e.target.checked ? form.howManyAttempts : 1 })}
              />
              <label className="wd-allow-multiple-attempts ms-1">Allow Multiple Attempts</label> 
              {form.multipleAttempts && (
                <>
                  <input 
                    id="wd-attempts"
                    type="number"
                    min={1}
                    value={form.howManyAttempts ?? ""}
                    className="w-[70px] px-2 py-2 ms-3 border rounded-xs border-gray-300"
                    onChange={(e) => setForm({ ...form, howManyAttempts: parseInt(e.target.value)})}
                  />
                  <label className="wd-attempts ms-1">Attempts</label> 
                </>
              )}
            </div>
            <div className="mt-2">
              <input 
                id="wd-shuffle-answers"
                type="checkbox"
                checked={form.shuffleAnswers}
                onChange={(e) => setForm({ ...form, shuffleAnswers: e.target.checked})}
              />
              <label htmlFor="wd-shuffle-answers" className="ms-1">Shuffle Answers</label>
            </div>
            <div className="mt-2">
              <input 
                id="wd-one-question-at-a-time"
                type="checkbox"
                checked={form.oneQuestionAtATime}
                onChange={(e) => setForm({ ...form, oneQuestionAtATime: e.target.checked})}
              />
              <label className="wd-one-question-at-a-time ms-1">One Question at a Time</label>
            </div>
            <div className="mt-2">
              <input 
                id="wd-webcam"
                type="checkbox"
                checked={form.webcamRequired}
                onChange={(e) => setForm({ ...form, webcamRequired: e.target.checked})}
              />
              <label className="wd-webcam ms-1">Webcam Required</label>
            </div>
            <div className="mt-2">
              <input 
                id="wd-lock-after-answering"
                type="checkbox"
                checked={form.lockQuestionsAfterAnswering}
                onChange={(e) => setForm({ ...form, lockQuestionsAfterAnswering: e.target.checked})}
              />
              <label className="wd-lock-after-answering ms-1">Lock Questions After Answering</label>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="shrink-0 text-right">
            <label htmlFor="wd-assign">Assign</label>
          </div>
          <div className="flex flex-col gap-4 rounded-xs border border-gray-300 ms-2 mb-4 p-3 w-110">
            <div>
              <label className="font-semibold" htmlFor="wd-due-date">Due: </label>
              <br />
              <div className="flex border border-gray-300 rounded-xs">
                <input 
                  className="flex-1 border-0 py-2 pl-2 text-sm"
                  type="date"
                  value={form.due} 
                  onChange={(e) => setForm({ ...form, due: e.target.value})}
                  id="wd-due-date"
                />
                <div className="flex bg-gray-200 p-2"><MdOutlineCalendarMonth size={25}/></div>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex-1">
                <label htmlFor="wd-available-from">Available From: </label>
                <br />
                <div className="flex border border-gray-300 rounded-xs">
                  <input 
                    className="flex-1 border-0 py-2 pl-2 text-sm"
                    type="date"
                    value={form.available} 
                    onChange={(e) => setForm({ ...form, available: e.target.value})}
                    id="wd-available-from"
                  />
                  <div className="flex bg-gray-200 p-2"><MdOutlineCalendarMonth size={25}/></div>
                </div>
              </div>
              <div className="flex-1">
                <label htmlFor="wd-available-until">Until: </label>
                <br />
                <div className="flex border border-gray-300 rounded-xs">
                  <input 
                    className="flex-1 border-0 py-2 pl-2 text-sm"
                    type="date"
                    value={form.until}
                    onChange={(e) => setForm({ ...form, until: e.target.value})}
                    id="wd-available-until"
                  />
                  <div className="flex bg-gray-200 p-2"><MdOutlineCalendarMonth size={25}/></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button 
          type="button" 
          id="wd-cancel" 
          onClick={cancel}
          className="rounded border px-3 py-2 border-gray-300 bg-gray-100 text-black no-underline"
        >
          Cancel
        </button>
        <button 
          type="button" 
          id="wd-save" 
          onClick={save}
          className="rounded border px-3 py-2 ms-2 border-red-700 bg-red-700 text-white no-underline"
        >
          Save
        </button>
      </div>
    </div>
  );
}