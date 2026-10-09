const STARSHIP =
  "https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg";
const LOREM =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic reprehenderit doloremque adipisci iste deserunt. Inventore, hic. Esse nihil unde aut, dignissimos eos consequatur veniam distinctio?";

export default function Float() {
  return (
    <div id="wd-float-divs">
      <h2>Float</h2>
      <div>
        <img className="wd-float-right" src={STARSHIP} alt="Starship" />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nisl lacus, finibus id risus et, facilisis porta libero. Aliquam vulputate ligula non nisi mattis, et tempus ante fermentum. Nullam aliquet viverra arcu id tempor. Fusce malesuada efficitur nisi vel tincidunt. Etiam eleifend convallis augue nec auctor. Duis commodo nulla pharetra semper ultricies. Donec diam massa, cursus sit amet erat in, tincidunt dignissim dolor. Vestibulum sodales porttitor ante, in aliquam diam condimentum eu. Aliquam quis pharetra tortor. Mauris a sapien maximus, interdum libero ultrices, mattis dolor. Maecenas blandit tempor sapien, eget maximus ante luctus et. Cras posuere ultricies malesuada. Etiam nisl mi, blandit eu venenatis vitae, hendrerit quis libero. Phasellus tristique, urna ut venenatis maximus, arcu neque interdum sapien, quis consequat enim sapien at elit. Nulla facilisi.
        <img className="wd-float-left" src={STARSHIP} alt="Starship" />
        Quisque in pellentesque ex. In mollis libero a mollis rutrum. Phasellus vel dui dapibus, ullamcorper sapien ac, ultrices leo. Fusce imperdiet dignissim tellus, in commodo massa. In hac habitasse platea dictumst. Duis bibendum egestas posuere. In id sem sed odio mattis dapibus. Proin interdum porttitor dapibus. Fusce id purus dignissim, molestie arcu vel, pharetra eros. Quisque fermentum mattis risus id ullamcorper. Maecenas in vestibulum erat, sed convallis libero. Cras in dolor sit amet metus dapibus elementum id nec nibh. Ut sit amet nisi sit amet nunc feugiat ornare non quis quam. Nulla dictum, eros eu ultricies aliquam, nisi massa convallis enim, quis interdum dui augue ac sem. Cras non lorem eget nisl tempus tempor quis at tortor. Curabitur bibendum enim vitae sem hendrerit ullamcorper sed et nisl.
        <img className="wd-float-right" src={STARSHIP} alt="Starship" />
        Aenean pharetra euismod urna, sed maximus dolor malesuada ut. Pellentesque venenatis sed urna vel luctus. Vivamus lobortis, mauris non bibendum rutrum, dolor purus venenatis est, sit amet tempor libero sapien non nibh. Suspendisse semper est sed tincidunt dapibus. Morbi vitae dolor faucibus diam iaculis mattis et quis felis. Phasellus tempor velit vel vestibulum luctus. Etiam nibh urna, ornare quis consequat sed, maximus et nibh. Curabitur suscipit consequat eros non dapibus. Praesent tincidunt et orci commodo porta. In finibus tellus nec mi euismod, vitae bibendum justo volutpat. Morbi finibus eros sit amet nibh dictum auctor.
        <img className="wd-float-left" src={STARSHIP} alt="Starship" />
        Quisque quis lobortis mauris. Etiam ultricies bibendum tellus, vitae viverra tortor tristique et. Nam nec placerat quam, ut dapibus diam. Sed nec nulla vitae erat imperdiet porttitor. Quisque id purus leo. Pellentesque dapibus volutpat sagittis. Suspendisse eleifend a risus a porta. Donec tristique, sapien id tincidunt hendrerit, ipsum ipsum lacinia metus, quis pretium turpis est eu erat. Praesent ac dignissim turpis.
        <div className="wd-float-done" />
      </div>
      <div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-yellow">
          Yellow
        </div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-blue wd-fg-color-white">
          Blue
        </div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-red">
          Red
        </div>
        <img className="wd-float-right" src={STARSHIP} alt="Starship" />
        <div className="wd-float-done" />
      </div>
      <div>
        <div id="wd-ai-float" className="wd-float-right wd-dimension-portrait wd-bg-color-blue wd-fg-color-white">
          Float sample
        </div>
        <p>{LOREM}</p>
        <div className="wd-float-done" />
      </div>
      <div>
        <h1>My Float</h1>
        <img className="wd-float-left" src="https://upload.wikimedia.org/wikipedia/commons/3/36/Badayea.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original" alt="my home town" />
        Etiam aliquam tristique massa ac fermentum. Aenean viverra tortor sit amet augue vulputate dictum. Curabitur neque ligula, ornare a velit id, maximus imperdiet dui. Nullam eget risus orci. Vestibulum vitae ante ac nisi hendrerit imperdiet. Nam id commodo ante. Nunc sit amet nunc tempus, porttitor dolor in, porttitor turpis. Duis hendrerit nisl lorem, sit amet eleifend urna sollicitudin ut. Etiam aliquet urna sed turpis accumsan ornare. Aenean fermentum quam vel neque semper ultricies. Proin laoreet quam eu quam vestibulum, eu porta est gravida. Vestibulum pellentesque dui nec ligula congue, ultricies feugiat odio imperdiet.
        <img className="wd-float-right" src="https://upload.wikimedia.org/wikipedia/commons/3/36/Badayea.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original" alt="my home town" />
        Etiam aliquam tristique massa ac fermentum. Aenean viverra tortor sit amet augue vulputate dictum. Curabitur neque ligula, ornare a velit id, maximus imperdiet dui. Nullam eget risus orci. Vestibulum vitae ante ac nisi hendrerit imperdiet. Nam id commodo ante. Nunc sit amet nunc tempus, porttitor dolor in, porttitor turpis. Duis hendrerit nisl lorem, sit amet eleifend urna sollicitudin ut. Etiam aliquet urna sed turpis accumsan ornare. Aenean fermentum quam vel neque semper ultricies. Proin laoreet quam eu quam vestibulum, eu porta est gravida. Vestibulum pellentesque dui nec ligula congue, ultricies feugiat odio imperdiet.
        Etiam aliquam tristique massa ac fermentum. Aenean viverra tortor sit amet augue vulputate dictum. Curabitur neque ligula, ornare a velit id, maximus imperdiet dui. Nullam eget risus orci. Vestibulum vitae ante ac nisi hendrerit imperdiet. Nam id commodo ante. Nunc sit amet nunc tempus, porttitor dolor in, porttitor turpis. Duis hendrerit nisl lorem, sit amet eleifend urna sollicitudin ut. Etiam aliquet urna sed turpis accumsan ornare. Aenean fermentum quam vel neque semper ultricies. Proin laoreet quam eu quam vestibulum, eu porta est gravida. Vestibulum pellentesque dui nec ligula congue, ultricies feugiat odio imperdiet.
      <div className="wd-float-done"></div>
      </div>
    </div>
  );
}