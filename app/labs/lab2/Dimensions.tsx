export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
        <div className="wd-dimension-landscape wd-bg-color-red">Test</div>
        <div id="wd-ai-dimension" className="wd-ai-dimension">
          This sentence is intentionally much longer than the declared 120px by
          60px box so the size is obvious.
        </div>
      </div>
    </div>
  );
}