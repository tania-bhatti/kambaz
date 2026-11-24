import "../lab2/tailwind/utilities.css";
import Environment from "./Environment";
import PathParamters from "./PathParameters";
import QueryParameter from "./QueryParameters";
import WorkingWithRemoteObjects from "./WorkingWithRemoteObjects";
import WorkingWithRemoteArrays from "./WorkingWithRemoteArrays";
import HttpClient from "./HttpClient";
import WorkingWithRemoteObjectsAsynchronously from "./WorkingWithRemoteObjectsAsync";
import WorkingWithRemoteArraysAsynchronously from "./WorkingWithRemoteArraysAsync";

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
      <PathParamters />
      <QueryParameter />
      <WorkingWithRemoteObjects />
      <WorkingWithRemoteArrays />
      <HttpClient />
      <WorkingWithRemoteObjectsAsynchronously />
      <WorkingWithRemoteArraysAsynchronously />
    </div>
  );
}
