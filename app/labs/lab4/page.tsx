"use client";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import "../lab2/tailwind/utilities.css";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import CounterBroken from "./CounterBroken";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ProfileForm from "./profile/ProfileForm";
import ParentStateComponent from "./ParentStateComponent";
import PropDrilling from "./PropDrilling";
import UrlEncoding from "./UrlEncoding";
import ContextExamples from "./context/ContextExamples";
import ZustandCounter from "./zustand/ZustandCounter";
import ZustandExamples from "./zustand/ZustandExamples";
import HelloRedux from "./redux/HelloRedux";
import CounterRedux from "./redux/CounterRedux";
import AddRedux from "./redux/AddRedux";
import ReduxExamples from "./redux/ReduxExamples";
import Effect from "./Effect";
import ToggleDemo from "./hooks/ToggleDemo";
import WindowDemo from "../lab3/client-apis/WindowDemo";
import LocalStorageDemo from "./hooks/LocalStorageDemo";
import IndependentToggles from "./hooks/IndependentToggles";
import HookProfileForm from "./hooks/HookProfileForm";
import HooksPage from "./hooks/page";

export default function Lab4() {
  return (
    <div id="wd-lab4">
      <h2>Lab 4</h2>

      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions
        message="Hello from Lab 4"
        theFunction={(message) => alert(message)}
        theOtherFunction={() => alert("Sample from parent")}
        nameFunction={() => alert("Tania Bhatti")}
      />
      <CounterBroken />
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariable />
      <ProfileForm />
      <ParentStateComponent />
      <PropDrilling />
      <UrlEncoding />
      <ContextExamples />
      <ZustandCounter />
      <ZustandExamples />
      <Provider store={store}>
        <HelloRedux />
        <CounterRedux />
        <AddRedux />
        <ReduxExamples />
      </Provider>
      <Effect />
      <HooksPage />
    </div>
  );
}