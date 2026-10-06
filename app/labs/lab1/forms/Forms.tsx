import TextFields from "./TextFields";
import Textarea from "./Textarea";
import RadioButtons from "./RadioButtons";
import Dropdowns from "./Dropdowns";
import YourFoorm from "./YourForm"; 

export default function Forms() {
  return (
    <div id="wd-forms">
      <h4>Form Elements</h4>
      <form id="wd-text-fields">
        <TextFields />
        <Textarea/>
        <RadioButtons/>
        <Dropdowns/>
        <YourFoorm/>
      </form>
    </div>
  );
}