import { FaCheckCircle } from "react-icons/fa";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { TbFileImport } from "react-icons/tb";
import { TfiTarget } from "react-icons/tfi";
import { VscArrowCircleRight } from "react-icons/vsc";
import { FaRegChartBar } from "react-icons/fa6";
import { IoBarChartSharp } from "react-icons/io5";
import { GrAnnounce } from "react-icons/gr";
import { FaRegBell } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";

export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2 className="mb-3 text-xl font-semibold">Course Status</h2>
      <div className="mb-6 flex gap-1">
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded border border-neutral-300 bg-gray px-1.5 py-1.5 text-xs"
        >
          <MdDoNotDisturbAlt className="me-1 shrink-0 text-base" /> Unpublish
        </button>
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded bg-green-600 px-1.5 py-1.5 text-xs text-white hover:bg-green-700"
        >
          <FaCheckCircle className="me-1 shrink-0 text-base" /> Publish
        </button>
      </div>
      <button
        type="button"
        className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-gray px-3 py-2 text-left text-sm"
      >
        <TbFileImport className="me-1 shrink-0 text-base" /> Import Existing Content
      </button>
      <button
        type="button"
        className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-gray px-3 py-2 text-left text-sm"
      >
        <VscArrowCircleRight className="me-1 shrink-0 text-base" /> Import From Commons
      </button>
      <button
        type="button"
        className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-gray px-3 py-2 text-left text-sm"
      >
        <TfiTarget className="me-1 shrink-0 text-base"/> Choose Home Page
      </button>
      <button
        type="button"
        className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-gray px-3 py-2 text-left text-sm"
      >
        <FaRegChartBar className="me-1 shrink-0 text-base" /> View Course Stream
      </button>
      <button
        type="button"
        className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-gray px-3 py-2 text-left text-sm"
      >
        <GrAnnounce className="me-1 shrink-0 text-base" /> New Announcement
      </button>
      <button
        type="button"
        className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-gray px-3 py-2 text-left text-sm"
      >
        <IoBarChartSharp className="me-1 shrink-0 text-base" /> New Analytics
      </button>
      <button
        type="button"
        className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-gray px-3 py-2 text-left text-sm"
      >
        <FaRegBell className="me-1 shrink-0 text-base" /> View Course Notifications
      </button>
      <button
        id="wd-ai-status"
        type="button"
        className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-gray px-3 py-2 text-left text-sm"
      >
        <IoInformationCircleOutline className="me-1 shrink-0 text-base" /> Sample action
      </button>
    </div>
  );
}