export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/Images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />

      <br />

      <br />
      <img
        id="wd-ai-image"
        width="200px"
        alt="Earth from space"
        src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80"
      />

      <br /> <br />

      <img
        id="wd-your-image"
        src="https://upload.wikimedia.org/wikipedia/commons/3/36/Badayea.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"
        height="200px"
        alt="My home town of Albadaya"
      />
    </div>
  );
}