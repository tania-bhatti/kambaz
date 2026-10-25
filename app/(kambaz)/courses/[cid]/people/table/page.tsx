import { FaUserCircle } from "react-icons/fa";
import * as db from "../../../../database";

export default async function PeopleTable({
  params, 
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params; 
  const { users, enrollments } = db; 
  const enrolled = users.filter((usr) => 
    enrollments.some(
      (enrollment) => enrollment.user === usr._id && enrollment.course === cid,
    ), 
  );
  return (
    <div id="wd-people-table" className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {enrolled.map((user) => (
            <tr key={user._id} className="odd:bg-neutral-50">
              <td className="wd-full-name p-2 text-nowrap">
                <FaUserCircle className="me-2 inline align-middle text-3xl text-neutral-500" /> 
                <span className="wd-first-name">{user.firstName}</span>{" "}
                <span className="wd-last-name">{user.lastName}</span>
              </td>
              <td className="wd-login-id p-2">{user.loginId}</td>
              <td className="wd-section p-2">{user.section}</td>
              <td className="wd-role p-2">{user.role}</td>
              <td className="wd-last-activity p-2">{user.lastActivity}</td>
              <td className="wd-total-activity p-2">{user.totalActivity}</td>
            </tr>
          ))}
          {/* <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
              Tony Stark
            </td>
            <td className="p-2">001234561S</td>
            <td className="p-2">S101</td>
            <td className="p-2">STUDENT</td>
            <td className="p-2">2020-10-01</td>
            <td className="p-2">10:21:32</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
              Sarah Williams
            </td>
            <td className="p-2">009384756S</td>
            <td className="p-2">S110</td>
            <td className="p-2">STUDENT</td>
            <td className="p-2">2020-09-29</td>
            <td className="p-2">08:10:40</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
              Jake Smith
            </td>
            <td className="p-2">019283745S</td>
            <td className="p-2">S111</td>
            <td className="p-2">STUDENT</td>
            <td className="p-2">2020-10-02</td>
            <td className="p-2">11:01:16</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
              Paul Jones
            </td>
            <td className="p-2">009384752S</td>
            <td className="p-2">S113</td>
            <td className="p-2">STUDENT</td>
            <td className="p-2">2020-10-01</td>
            <td className="p-2">13:10:41</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
              Jane Sample
            </td>
            <td className="p-2">001111111S</td>
            <td className="p-2">S101</td>
            <td className="p-2">STUDENT</td>
            <td className="p-2">2020-10-03</td>
            <td className="p-2">05:12:09</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
              Alex Sample
            </td>
            <td className="p-2">002222222S</td>
            <td className="p-2">S102</td>
            <td className="p-2">STUDENT</td>
            <td className="p-2">2020-10-04</td>
            <td className="p-2">07:45:30</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
              Sam Sample
            </td>
            <td className="p-2">003333333S</td>
            <td className="p-2">S103</td>
            <td className="p-2">STUDENT</td>
            <td className="p-2">2020-10-05</td>
            <td className="p-2">09:20:55</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}