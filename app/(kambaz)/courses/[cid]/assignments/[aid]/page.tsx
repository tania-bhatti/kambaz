import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineCalendarMonth } from "react-icons/md";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <br />
      <input 
        id="wd-name" 
        className="rounded-xs border border-gray-300 py-2 pl-2 w-150 text-sm"
        defaultValue="A1 - ENV + HTML" 
      />
      <br />
      <br />
      
      <textarea 
        id="wd-description"
        className="mb-4 ps-3 pt-6 h-80 w-150 rounded-xs border border-gray-300 text-sm"
        defaultValue={`The assignment is available online Submit a link to the landing page of your Web application running on Vercel.`}
      >
      </textarea>
      <br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input 
                id="wd-points" 
                className="rounded-xs border border-gray-300 ms-2 mb-4 py-2 w-110 pl-2 text-sm"
                defaultValue={100} 
              />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <div className="relative">
                <select 
                  id="wd-group" 
                  className="w-full appearance-none rounded-xs border border-gray-300 ms-2 mb-4 py-2 pl-2 text-sm"
                  defaultValue="ASSIGNMENTS"
                >
                  <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                  <option value="QUIZZES">QUIZZES</option>
                  <option value="EXAMS">EXAMS</option>
                  <option value="Project">PROJECT</option>
                </select>
                <IoIosArrowDown size={30} className="absolute right-1 top-1"/>
              </div>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <div className="relative">
                <select 
                  id="wd-display-grade-as" 
                  className="w-full appearance-none rounded-xs border border-gray-300 ms-2 mb-4 py-2 pl-2 text-sm"
                  defaultValue="POINTS"
                >
                  <option value="POINTS">Points</option>
                  <option value="PERCENTAGE">Percentage</option>
                  <option value="LETTER">Letter</option>
                </select>
                <IoIosArrowDown size={30} className="absolute right-1 top-1"/>
              </div>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <div className="rounded-xs border border-gray-300 w-110 ms-2 mb-4 p-3">
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
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign">Assign</label>
            </td>
            <td>
              <div className="flex flex-col gap-4 rounded-xs border border-gray-300 ms-2 mb-4 p-3">
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
                  <label className="font-semibold" htmlFor="wd-due-date">Date: </label>
                  <br />
                  <div className="flex border border-gray-300 rounded-xs">
                    <input 
                      className="flex-1 border-0 py-2 w-70 pl-2 text-sm"
                      type="date"
                      defaultValue="2026-12-15"
                      min="2026-09-27"
                      max="2026-12-20"
                      id="wd-due-date"
                    />
                    <div className="flex align-items bg-gray-200 p-2"><MdOutlineCalendarMonth size={25}/></div>
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
                        defaultValue="2026-12-15"
                        min="2026-09-27"
                        max="2026-12-20"
                        id="wd-available-from"
                      />
                      <div className="flex align-items bg-gray-200 p-2"><MdOutlineCalendarMonth size={25}/></div>
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
                      <div className="flex align-items bg-gray-200 p-2"><MdOutlineCalendarMonth size={25}/></div>
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <label htmlFor="wd-ai-editor-notes">Sample notes</label>
      <br />
      <textarea
        id="wd-ai-editor-notes"
        className="mb-4 ps-3 pt-2 h-40 w-full rounded-xs border border-gray-300 text-sm"
      >
      </textarea>
      <br />
      <hr className="mx-0 w-148 border-t border-gray-200" />
      <div className="max-w-148 flex justify-end gap-1">
        <Link href="/courses/1234/assignments" id="wd-cancel" className="rounded border px-3 py-2 border-gray-300 bg-gray-100 text-black no-underline">Cancel</Link>{" "}
        <Link href="/courses/1234/assignments" id="wd-save" className="rounded border px-3 py-2 border-red-700 bg-red-700 text-white no-underline">Save</Link>
      </div>
    </div>
  );
}