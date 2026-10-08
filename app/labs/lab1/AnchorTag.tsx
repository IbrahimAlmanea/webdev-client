export default function AnchorTag() {
  return (
    <>
      <h4>Anchor tag</h4>
      Please{" "}
      <a href="https://www.lipsum.com" id="wd-lipsum">
        click here
      </a>{" "}
      to get dummy text
      <br />
      <a href="https://github.com/jannunzi" id="wd-github">
        GitHub
      </a>

      <h4>my tags</h4>
      <a href="https://claude.ai/">claude</a>
      <br />
      <a href="https://github.com/IbrahimAlmanea" 
        target="_blank" rel="noreferrer"
        id="wd-your-github">my Github</a>
      <br />
      <a
        id="wd-ai-link"
        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
      >
        MDN: table element
      </a>
    </>

  );
}