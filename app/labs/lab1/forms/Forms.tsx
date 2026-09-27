"use client";

import TextFields from "./TextFields";
import Textarea from "./Textarea";
import RadioButtons from "./RadioButtons";
import Checkboxes from "./Checkboxes";
import Dropdowns from "./Dropdowns";
import OtherFieldTypes from "./OtherFieldTypes";
import Buttons from "./Buttons";
import YourForm from "./YourForm";

export default function Forms() {
  return (
    <div id="wd-your-form">
      <h4 id="wd-forms">Form Elements</h4>
      <form
        id="wd-text-fields"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <TextFields />
        <Textarea />
        <RadioButtons />
        <Checkboxes />
        <Dropdowns />
        <OtherFieldTypes />
        <Buttons />
        <YourForm />
      </form>
    </div>
  );
}