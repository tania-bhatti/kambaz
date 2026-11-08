"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Module from "./Module";
import ModuleControls from "./ModuleControls";
import { useModulesStore } from "../../../store/modulesStore";

export default function Modules() {
  const { cid } = useParams<{ cid: string }>();
  const modules = useModulesStore((state) => state.modules);
  const addModuleToStore = useModulesStore((state) => state.addModule);
  const [moduleName, setModuleName] = useState("");

  const addModule = () => {
    if (!moduleName.trim()) return;
    addModuleToStore({ name: moduleName.trim(), course: cid });
    setModuleName("");
  };

  return (
    <div className="wd-modules">

      <ModuleControls />

      <ul id="wd-modules" className="m-0 list-none p-0">
        {modules
          .filter((module) => module.course === cid)
          .map((module) => (
            <Module key={module._id} module={module} />
          ))}
      </ul>

    </div>
  );
}
