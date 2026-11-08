"use client"

import Link from "next/link";
import { useParams, useRouter} from "next/navigation";
import { useState } from "react"; 
import { useAssignmentsStore } from "@/app/(kambaz)/store/assignmentsStore";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineCalendarMonth } from "react-icons/md";

export default  function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string, aid: string }>(); 
  const router = useRouter(); 
  const { assignments, addAssignment, updateAssignment } = useAssignmentsStore(); 
  const assignment = assignments.find((a) => a._id === aid);
  
  const [title, setTitle] = useState(assignment?.title ?? "");
  const [points, setPoints] = useState(assignment?.points ?? 100); 
  const [due, setDue] = useState(assignment?.due ?? ""); 
  const [available, setAvailable] = useState(assignment?.available ?? ""); 
  const [description, setDescription] = useState(assignment?.description ?? "");

  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <br />
      <input 
        id="wd-name" 
        className="rounded-xs border border-gray-300 py-2 pl-2 w-150 text-sm"
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <br />
      <p id="wd-assignment-id" className="mt-2 text-sm text-gray-600">Assignment id: {aid}</p>
      <textarea
        id="wd-description"
        className="mb-4 ps-3 pt-6 h-80 w-150 rounded-xs border border-gray-300 text-sm"
        value={description} 
        onChange={(e) => setDescription(e.target.value)}
      >
      </textarea>
      <br />
      <div className="flex flex-col w-150">
        <div className="flex justify-end">
          <label htmlFor="wd-points" className="shrink-0 text-right">Points</label>
          <input 
            id="wd-points" 
            className="rounded-xs border border-gray-300 ms-2 mb-4 py-2 pl-2 w-110 text-sm"
            value={points} 
            onChange={(e) => setPoints(Number(e.target.value))}
          />
        </div>
        <div className="flex justify-end">
          <div className="shrink-0 text-right">
            <label htmlFor="wd-group">Assignment Group</label>
          </div>
          <div className="relative">
            <select 
              id="wd-group" 
              className="appearance-none rounded-xs border border-gray-300 ms-2 mb-4 py-2 pl-2 w-110 text-sm"
              defaultValue="ASSIGNMENTS"
            >
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
              <option value="Project">PROJECT</option>
            </select>
            <IoIosArrowDown size={30} className="absolute right-1 top-1"/>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="shrink-0 text-right">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </div>
          <div className="relative">
            <select 
              id="wd-display-grade-as" 
              className="appearance-none rounded-xs border border-gray-300 ms-2 mb-4 py-2 pl-2 w-110 text-sm"
              defaultValue="POINTS"
            >
              <option value="POINTS">Points</option>
              <option value="PERCENTAGE">Percentage</option>
              <option value="LETTER">Letter</option>
            </select>
            <IoIosArrowDown size={30} className="absolute right-1 top-1"/>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="shrink-0 text-right">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </div>
          <div className="rounded-xs border border-gray-300 ms-2 mb-4 p-3 w-110">
            <div className="relative">
              <select 
                id="wd-submission-type" 
                className="w-full appearance-none rounded-xs border border-gray-300 py-2 pl-2 text-sm"
                defaultValue="ONLINE"
              >
                <option value="ONLINE">Online</option>
                <option value="PAPER">Paper</option>
                <option value="EXTERNAL">External Tool</option>
                <option value="NONE">No Submission</option>
              </select>
              <IoIosArrowDown size={30} className="absolute right-1 top-1"/>
            </div>
            <div className="mt-4 mb-4 flex flex-col gap-4">
              <label className="font-semibold">Online Entry Options</label>
              <div>
                <input className="me-2 size-4" type="checkbox" name="online-entry" id="wd-text-entry"/>
                <label htmlFor="wd-text-entry">Text Entry</label>
              </div>
              <div>
                <input className="me-2 size-4" type="checkbox" name="online-entry" id="wd-website-url"/>
                <label htmlFor="wd-website-url">Website URL</label>
              </div>
              <div>
                <input className="me-2 size-4" type="checkbox" name="online-entry" id="wd-media-recordings"/>
                <label htmlFor="wd-media-recordings">Media Recordings</label>
              </div>
              <div>
                <input className="me-2 size-4" type="checkbox" name="online-entry" id="wd-student-annotation"/>
                <label htmlFor="wd-student-annotation">Student Annotation</label>
              </div>
              <div>
                <input className="me-2 size-4" type="checkbox" name="online-entry" id="wd-file-upload"/>
                <label htmlFor="wd-file-upload">File Upload</label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="shrink-0 text-right">
            <label htmlFor="wd-assign">Assign</label>
          </div>
          <div className="flex flex-col gap-4 rounded-xs border border-gray-300 ms-2 mb-4 p-3 w-110">
            <div>
              <label htmlFor="wd-assign-to">Assign To</label>
              <br />
              <div className="relative">
                <select 
                  id="wd-assign-to" 
                  className="w-full appearance-none rounded-xs border border-gray-300 py-2 pl-2 text-sm"
                  defaultValue="EVERYONE"
                >
                  <option value="EVERYONE">Everyone</option>
                  <option value="GROUP">Group</option>
                </select>
                <IoIosArrowDown size={30} className="absolute right-1 top-1"/>
              </div>
            </div>
            <div>
              <label className="font-semibold" htmlFor="wd-due-date">Due: </label>
              <br />
              <div className="flex border border-gray-300 rounded-xs">
                <input 
                  className="flex-1 border-0 py-2 pl-2 text-sm"
                  type="date"
                  value={due} 
                  onChange={(e) => setDue(e.target.value)}
                  min="2026-09-27"
                  max="2026-12-20"
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
                    value={available} 
                    onChange={(e) => setAvailable(e.target.value)}
                    min="2026-09-27"
                    max="2026-12-20"
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
                    defaultValue="2026-12-15"
                    min="2026-09-27"
                    max="2026-12-20"
                    id="wd-available-until"
                  />
                  <div className="flex bg-gray-200 p-2"><MdOutlineCalendarMonth size={25}/></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <label htmlFor="wd-ai-editor-notes">Sample notes</label>
      <br />
      <textarea
        id="wd-ai-editor-notes"
        className="mb-4 ps-3 pt-2 h-40 w-full rounded-xs border border-gray-300 text-sm"
      >
      </textarea>
      <br />
      <hr className="mx-0 w-150 border-t border-gray-200" />
      <div className="max-w-150 flex justify-end gap-1">
        <Link href={`/courses/${cid}/assignments`} id="wd-cancel" className="rounded border px-3 py-2 border-gray-300 bg-gray-100 text-black no-underline">
          Cancel
        </Link>{" "}
        <button
          type="button"
          id="wd-save"
          onClick={() => { 
            if (!title.trim()) return;
            assignment ? updateAssignment({...assignment, title, description, points, due, available }) 
            : addAssignment({ title, description, course: cid, points, due, available})
            router.push(`/courses/${cid}/assignments`);
          }}
          className="rounded border px-3 py-2 border-red-700 bg-red-700 text-white no-underline"
        >
          Save
        </button>
      </div>
    </div>
  );
}