"use client";

import { useState } from "react";
import CourseCard from "./CourseCard";
import {
  emptyCourse,
  useCoursesStore,
  type Course,
} from "../store/coursesStore";
import { useEnrollmentsStore } from "../store/enrollmentsStore";
import { useAccountContext } from "../account/AccountContext";

export default function Dashboard() {
  const courses = useCoursesStore((state) => state.courses);
  const addCourse = useCoursesStore((state) => state.addCourse);
  const updateCourse = useCoursesStore((state) => state.updateCourse);
  const [course, setCourse] = useState<Course>(emptyCourse);
  const { currentUser } = useAccountContext();
  const { enrollments, enrollIntoCourse } = useEnrollmentsStore();
  const [showAllCourses, setShowAllCourses] = useState(false);
  const isEnrolled = (courseId: string) =>
    currentUser !== null &&
    enrollments.some(
      (e) => e.user === currentUser._id && e.course === courseId,
    );
  const visibleCourses =
    currentUser && !showAllCourses
      ? courses.filter((c) => isEnrolled(c._id))
      : courses;
  const addCourseAndEnroll = () => {
    addCourse(course);
    const newCourse = useCoursesStore.getState().courses.at(-1);
    if (currentUser && newCourse) enrollIntoCourse(currentUser._id, newCourse._id);
  };
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title" className="flex items-center justify-between">
        Dashboard
        {currentUser && (
          <button type="button" id="wd-enrollments-toggle" className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
            onClick={() => setShowAllCourses(!showAllCourses)} >
            Enrollments
          </button>
        )}
      </h1>
      <hr />
      <h5 className="flex flex-wrap items-center gap-2">
        New Course
        <button type="button" id="wd-add-new-course-click" className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
          onClick={addCourseAndEnroll} >          Add        </button>
        <button type="button" id="wd-update-course-click" className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
          onClick={() => updateCourse(course)} >  Update     </button>
      </h5>
      <input value={course.name} id="wd-course-name" className="mb-2 mt-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
      <textarea value={course.description} rows={3} id="wd-course-description" className="mb-3 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        onChange={(e) =>
          setCourse({ ...course, description: e.target.value })
        } />
      <input value={course.number} id="wd-course-number" className="mb-2 mt-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5" 
        onChange={(e) => setCourse({ ...course, number: e.target.value })} />
      <input type="date" value={course.startDate} id="wd-course-startDate" className="mb-3 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({visibleCourses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses" className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4" >
        {visibleCourses.map((c) => (
          <CourseCard key={c._id}
            course={c}
            onEdit={() => setCourse(c)} />
        ))}
      </div>
    </div>
  );
};
