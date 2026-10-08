export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
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
            <td>
                <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
                <select id="wd-group">
                    <option>ASSIGNMENTS</option>
                    <option>QUIZZES</option>
                    <option>EXAMS</option>
                    <option>PROJECT</option>
                </select>
            </td>
          </tr>
          <tr>
            <td>
                <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
                <select id="Display Grade as">
                    <option>Percentage</option>
                    <option>Points</option>
                </select>
            </td>
          </tr>
          <tr>
            <td align="center" valign="top">
                <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
                <select id="wd-submission-type">
                    <option>Online</option>
                    <option>Offline</option>
                </select>
                <br />
                <label htmlFor="wd-online-entry-options">Online Entry Options</label>
                <br />
                <input type="checkbox" name="online-entry-options" id="wd-text-entry" />
                <label htmlFor="wd-text-entry">Text Entry</label>
                <br />
                <input type="checkbox" name="online-entry-options" id="wd-website-url" />
                <label htmlFor="wd-website-url">Website URL</label>
                <br />
                <input type="checkbox" name="online-entry-options" id="wd-media-recordings" />
                <label htmlFor="wd-media-recordings">Media Recordings</label>
                <br />
                <input type="checkbox" name="online-entry-options" id="wd-student-annotation" />
                <label htmlFor="wd-student-annotation">Student Annotation</label>
                <br />
                <input type="checkbox" name="online-entry-options" id="wd-file-upload" />
                <label htmlFor="wd-file-upload">File Upload</label>
            </td>
          </tr>
          <tr>
            <td align="center" valign="top">
                <label>Assign</label>
            </td>
            <td>
                <label htmlFor="wd-assign-to">Assign to</label>
                <br />
                <input id="wd-assign-to" type="text" />
                <br />
                <label htmlFor="wd-due-date">Due</label>
                <br />
                <input id="wd-due-date" type="date" />
                <br />
                <label htmlFor="wd-available-from">Available from</label>
                <br />
                <input id="wd-available-from" type="date" />
                <br />
                <label htmlFor="wd-available-until">Until</label>
                <br />
                <input id="wd-available-until" type="date" />                
            </td>
          </tr>
          <tr>
            <td>
                
            </td>
            <td align="right">
                <button id="wd-cancel" type="button">Cancel</button>
                <span> </span>
                <button id="wd-save" type="submit">Save</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}