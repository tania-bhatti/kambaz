export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description"
        defaultValue="The assignment is available online Submit a link to the landing page of"
      />
      <br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group" defaultValue="ASSIGNMENTS">
                <option value="ASSIGNMENTS">Assignments</option>
                <option value="QUIZZES">Quizzes</option>
                <option value="EXAMS">Exams</option>
                <option value="Project">Project</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as" defaultValue="POINTS">
                <option value="POINTS">Points</option>
                <option value="PERCENTAGE">Percentage</option>
                <option value="LETTER">Letter</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type" defaultValue="ONLINE">
                <option value="ONLINE">Online</option>
                <option value="PAPER">Paper</option>
                <option value="EXTERNAL">External Tool</option>
                <option value="NONE">No Submission</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label>Online Entry Options</label>
              <br />
              <input type="checkbox" name="online-entry" id="wd-text-entry"/>
              <label htmlFor="wd-text-entry">Text Entry</label>
              <br />
              <input type="checkbox" name="online-entry" id="wd-website-url"/>
              <label htmlFor="wd-website-url">Website URL</label>
              <br />
              <input type="checkbox" name="online-entry" id="wd-media-recordings"/>
              <label htmlFor="wd-media-recording">Media Recordings</label>
              <br />
              <input type="checkbox" name="online-entry" id="wd-student-annotation"/>
              <label htmlFor="wd-student-annotation">Student Annotation</label>
              <br />
              <input type="checkbox" name="online-entry" id="wd-file-upload"/>
              <label htmlFor="wd-file-upload">File Upload</label>
              <br />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign To</label>
            </td>
            <td>
              <select id="wd-assign-to" defaultValue="EVERYONE">
                <option value="EVERYONE">Everyone</option>
                <option value="GROUP">Group</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due Date: </label>
            </td>
            <td>
              <input 
                type="date"
                defaultValue="2026-12-15"
                min="2026-09-27"
                max="2026-12-20"
                id="wd-due-date"
              />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from">Available From: </label>
            </td>
            <td>
              <input 
                type="date"
                defaultValue="2026-09-27"
                min="2026-09-27"
                max="2026-12-20"
                id="wd-available-from"
              />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-until">Available Until: </label>
            </td>
            <td>
              <input 
                type="date"
                defaultValue="2026-12-15"
                min="2026-09-27"
                max="2026-12-20"
                id="wd-available-until"
              />
            </td>
          </tr>
          <tr>
            <td>
              <button>Cancel</button><button>Save</button>
            </td>
          </tr>
          {/* Complete on your own — see checklist below */}
        </tbody>
      </table>
    </div>
  );
}