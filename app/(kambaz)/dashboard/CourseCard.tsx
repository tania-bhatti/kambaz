import Link from "next/link";
import Image from "next/image";
import { type Course } from "../store/coursesStore";
import { useEnrollmentsStore } from "../store/enrollmentsStore";
import { useAccountContext } from "../account/AccountContext";
import * as enrollmentsClient from "../enrollments/client"; 

export default function CourseCard({
  course,
  onEdit,
  onDelete,
}: {
  course: Course;
  onEdit: () => void;
  onDelete: (courseId: string) => void;
}) {
  const { currentUser } = useAccountContext();
  const { enrollments, enrollIntoCourse, unenrollFromCourse } =
    useEnrollmentsStore();
  const enrolled = currentUser
    ? enrollments.some((e) => e.user === currentUser._id && e.course === course._id)
    : null;
  const toggleEnrollment = async () => {
    if (!currentUser) return;
    if (enrolled) {
      await enrollmentsClient.unenrollFromCourse(currentUser._id, course._id);
      unenrollFromCourse(currentUser._id, course._id);
    } else {
      await enrollmentsClient.enrollIntoCourse(currentUser._id, course._id);
      enrollIntoCourse(currentUser._id, course._id);
    }
  };
  return (
    <div className="wd-dashboard-course w-[300px] max-w-full overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm">
      <Link href={`/courses/${course._id}/home`} className="wd-dashboard-course-link block text-neutral-900 no-underline" >
        <Image src={course.image || "/images/reactjs.jpg"} width={300} height={160} alt={course.name} className="h-40 w-full object-cover" />
        <div className="p-4">
          <h5 className="wd-dashboard-course-title m-0 mb-2 truncate text-lg font-semibold whitespace-nowrap">
            {course.name}
          </h5>
          <p className="wd-dashboard-course-description m-0 mb-3 h-[100px] overflow-hidden text-sm text-neutral-600">
            {course.description}
          </p>
          <button type="button" className="inline-flex items-center justify-center rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white">
            Go
          </button>
          <button type="button" id="wd-edit-course-click" className="ms-2 inline-flex items-center justify-center rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
            onClick={(event) => {
              event.preventDefault();
              onEdit();
            }} >
            Edit
          </button>
          <button type="button" id="wd-delete-course-click" className="ms-2 inline-flex items-center justify-center rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
            onClick={(event) => {
              event.preventDefault();
              onDelete(course._id);
            }} >
            Delete
          </button>
          {enrolled !== null && (
            <button type="button" id="wd-enrollment-click" className={`ms-2 inline-flex items-center justify-center rounded px-3 py-1.5 text-sm font-medium text-white ${enrolled ? "bg-red-600" : "bg-green-600"}`}
              onClick={(event) => {
                event.preventDefault();
                toggleEnrollment();
              }} >
              {enrolled ? "Unenroll" : "Enroll"}
            </button>
          )}
        </div>
      </Link>
    </div>
  );
}