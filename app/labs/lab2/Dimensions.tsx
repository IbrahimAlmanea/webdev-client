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
        <div id="wd-ai-dimension" className="wd-ai-dimension">
          This deliberately long sentence extends beyond the 120 pixel width and 60 pixel height to make the declared box size obvious.
        </div>
        <div className="wd-my-dimension wd-bg-color-green">
          my Dimention
        </div>
      </div>

    </div>
  );
}