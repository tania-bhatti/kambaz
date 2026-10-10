import "./index.css";
import ForegroundColors from "./ForegroundColors";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import Padding from "./Padding";
import Margins from "./Margins";
import BoxModel from "./BoxModel";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Display from "./Display";
import Positions from "./Positions";
import Zindex from "./Zindex";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import MediaQueriesDemo from "./MediaQueriesDemo";
import ReactIconsSampler from "./ReactIconsSampler";

export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <h3>Styling with the STYLE attribute</h3>
      <p>
        <a href="/labs/lab2/tailwind">Open Tailwind CSS lab →</a>
      </p>
      <p>
        Style attribute allows configuring look and feel right on the
        element. Although it&apos;s very convenient it is considered bad
        practice and you should avoid using the style attribute
      </p>
      <p id="wd-ai-style-attr" style={{ backgroundColor: "purple", color: "white" }}>
        Styling HTML Tags with the Style Attribute
      </p>
      <p style={{backgroundColor: "green", color: "yellow"}}>
        Styling HTML Tags with the Style Attribute
      </p>

      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
          Instead of changing the look and feel of all the
          elements of the same name, e.g., P, we can refer to a
          specific element by its ID
        </p>
        <p id="wd-id-selector-2">
          Here&apos;s another paragraph using a different ID and a
          different look and feel
        </p>
        <p id="wd-ai-id-selector">
          Here&apos;s a third sample paragraph using its own ID selector
        </p>
        <p id="wd-id-selector-3">
          "On your own" #3
        </p>
      </div>

      <p id="wd-ai-cascade" className="wd-ai-cascade">
        This sample paragraph is targeted by a tag, class, and ID rule at once
      </p>

      <div id="wd-css-class-selectors">
        <h3>Class selectors</h3>
        <p className="wd-class-selector">
          Instead of using IDs to refer to elements, you can use an
          element&apos;s CLASS attribute
        </p>
        <h4 className="wd-class-selector">
          This heading has same style as paragraph above
        </h4>
        <p className="wd-ai-class-selector">
          This paragraph uses a sample AI class selector
        </p>
        <h4 className="wd-ai-class-selector">
          This heading uses the same AI class selector
        </h4>
        <h4 className="wd-your-class">
          This heading is from the "on your own" section
        </h4>
        <p className="wd-your-class">
          This paragraph has the same class name as the heading above it
        </p>
      </div>

      <div id="wd-css-document-structure">
        <div className="wd-selector-1">
          <h3>Document structure selectors</h3>
          <div className="wd-selector-2">
            Selectors can be combined to refer elements in particular
            places in the document
            <p className="wd-selector-3">
              This paragraph&apos;s red background is referenced as
              <br />
              .selector-2 .selector3
              <br />
              meaning the descendant of some ancestor.
              <br />
              <span className="wd-selector-4">
                Whereas this <span className="wd-selector-5">span</span> is a direct child of its parent
              </span>
              <br />
              You can combine these relationships to create specific
              styles depending on the document structure
              <br />
              <span className="wd-ai-selector-5">
                This span is a sample descendant selector nested in .wd-selector-3
              </span>
            </p>
          </div>
        </div>
      </div>

      <ForegroundColors />
      <BackgroundColors />
      <Borders /> 
      <Padding />
      <Margins /> 
      <BoxModel />
      <Corners />
      <Dimensions />
      <Display />
      <Positions />
      <Zindex />
      <Float />
      <GridLayout />
      <Flex />
      <MediaQueriesDemo />
      <ReactIconsSampler />
    </div>
  );
}