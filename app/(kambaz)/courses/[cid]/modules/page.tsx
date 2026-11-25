"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Module from "./Module";
import ModuleControls from "./ModuleControls";
import { CourseModule, useModulesStore } from "../../../store/modulesStore";
import * as client from "../../client";   // courses/client.ts

export default function Modules() {
  const { cid } = useParams<{ cid: string }>();
  const modules = useModulesStore((state) => state.modules);
  const addModuleToStore = useModulesStore((state) => state.addModule);
  const [moduleName, setModuleName] = useState("");
  const setModules = useModulesStore((state) => state.setModules);
  const addModule = useModulesStore((state) => state.addModule);
  const deleteModule = useModulesStore((state) => state.deleteModule);
  const updateModule = useModulesStore((state) => state.updateModule);


  const onAddModule = async (module: {name: string; course: string }) => {
    const created = await client.createModuleForCourse(cid, module);
    addModule(created);
  };

  const onRemoveModule = async (moduleId: string) => {
    await client.deleteModule(moduleId);
    deleteModule(moduleId);
  };

  const onUpdateModule = async (module: CourseModule) => {
    const saved = await client.updateModule(module);
    updateModule(saved);
  };

  useEffect(() => {
    const load = async () => {
      setModules(await client.findModulesForCourse(cid));
    };
    load();
  }, [cid]);

  return (
    <div className="wd-modules">

      <ModuleControls onAddModule={onAddModule}/>

      <ul id="wd-modules" className="m-0 list-none p-0">
        {modules
          .map((module) => (
            <Module key={module._id} module={module} onRemoveModule={onRemoveModule} onUpdateModule={onUpdateModule} />
          ))}
      </ul>

    </div>
  );
}
