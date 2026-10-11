import Link from "next/link";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <div className="grid grid-cols-1">
      <label htmlFor="wd-name" className="mb-4">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" className="assignment-editor-inputs mb-4" />
      <textarea id="wd-description" className=" border border-gray-300 rounded-md h-30 mb-4">
        The assignment is available online Submit a link to the landing page of
        your Web application running on Vercel.
      </textarea>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <label htmlFor="wd-points" className="text-right">Points</label>

        <input id="wd-points" defaultValue={100} className="assignment-editor-inputs col-span-2"/>

        <label htmlFor="wd-group" className="text-right">Assignment Group</label>
        <select id="wd-group" className="assignment-editor-inputs  col-span-2">
            <option>ASSIGNMENTS</option>
            <option>QUIZZES</option>
            <option>EXAMS</option>
            <option>PROJECT</option>
        </select>

        <label htmlFor="wd-display-grade-as" className="text-right">Display Grade as</label>
        <select id="Display Grade as" className="assignment-editor-inputs col-span-2" >
            <option>Percentage</option>
            <option>Points</option>
        </select>

        <label htmlFor="wd-submission-type" className="text-right ">Submission Type</label>

        <div className="flex flex-col p-4 border border-gray-300 rounded-lg col-span-2">
          <select id="wd-submission-type" className="assignment-editor-inputs">
              <option>Online</option>
              <option>Offline</option>
          </select>

          <div>
            <div  className="text-xl font-bold my-4"><label htmlFor="wd-online-entry-options">Online Entry Options</label></div>
            <div className="text-xl">
              <div>
                <input type="checkbox" name="online-entry-options" id="wd-text-entry" className="assignment-editor-checkboxes" />
                <label htmlFor="wd-text-entry">Text Entry</label>
              </div>
              <div>
                <input type="checkbox" name="online-entry-options" id="wd-website-url" className="assignment-editor-checkboxes"/>
                <label htmlFor="wd-website-url">Website URL</label>
              </div>
              <div>
                <input type="checkbox" name="online-entry-options" id="wd-media-recordings" className="assignment-editor-checkboxes"/>
                <label htmlFor="wd-media-recordings">Media Recordings</label>
              </div>
              <div>
                <input type="checkbox" name="online-entry-options" id="wd-student-annotation" className="assignment-editor-checkboxes"/>
                <label htmlFor="wd-student-annotation">Student Annotation</label>
              </div>
              <div>
                <input type="checkbox" name="online-entry-options" id="wd-file-upload" className="assignment-editor-checkboxes"/>
                <label htmlFor="wd-file-upload">File Upload</label>
              </div>
            </div>
          </div>
        </div>

        <label className="text-right">Assign</label>
        
        <div className="flex flex-col text-xl font-bold border border-gray-300 rounded-lg p-4 col-span-2">
          <label htmlFor="wd-assign-to">Assign to</label>
          <input id="wd-assign-to" type="text" className="assignment-editor-inputs mb-4"/>
          <label htmlFor="wd-due-date">Due</label>
          <input id="wd-due-date" type="date" className="assignment-editor-inputs mb-4" />

          <div className="grid grid-cols-2 gap-2">
            <label htmlFor="wd-available-from">Available from</label>
            <label htmlFor="wd-available-until">Until</label>
            <input id="wd-available-from" type="date" className="assignment-editor-inputs" />
            <input id="wd-available-until" type="date" className="assignment-editor-inputs"/>  
          </div>              
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1">
        <label htmlFor="wd-ai-editor-notes" className="mb-4">
          Sample notes
        </label>
        <textarea
          id="wd-ai-editor-notes"
          className="w-full border border-gray-300 rounded-md h-30 mb-4"
        />
      </div>
      <div className="border-t border-gray-300 text-right h-15 py-6 px-4 mt-10">
        <Link href="/courses/1234/assignments" id="wd-cancel" className="border border-gray-300 bg-gray-100 text-black rounded-lg no-underline px-6 py-3 m-2">Cancel</Link>{" "}
        <Link href="/courses/1234/assignments" id="wd-save" className="bg-red-700 text-white rounded-lg no-underline px-6 py-3">Save</Link>
      </div>
    </div>
  );
}