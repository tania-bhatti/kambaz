import "../lab2/tailwind/utilities.css";
import Environment from "./Environment";

export default function Lab5() {
  const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
  return (
    <div id="wd-lab5">
      <h2>Lab 5</h2>
      <a
        id="wd-welcome-link"
        href={`${HTTP_SERVER}/lab5/welcome`}
        className="underline text-blue-500"
      >
        Welcome
      </a>

      <Environment />
    </div>
  );
}
