export default function YourForm() {
  return (
    <div>
      <br />
      <br />
      <h3>My Form</h3>
      <form id="wd-your-form">
        <label htmlFor="first-name">First name</label>
        <input
          id="first-name"
          name="firstName"
          type="text"
          placeholder="Jane Doe"
        />
        <br />

        <label htmlFor="last-name">Last name</label>
        <input
          id="last-name"
          name="lastName"
          type="text"
          placeholder="Jane Doe"
        />
        <br />

        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" placeholder="Enter a password" />
        <br />

        <label htmlFor="bio">Biography</label>
        <br />
        <textarea
          id="bio"
          name="bio"
          cols={30}
          rows={5}
          placeholder="A short biography about you"
        />
        <br />

        <fieldset>
          <legend>Class standing</legend>
          <label htmlFor="undergraduate">Undergraduate</label>
          <input id="undergraduate" name="classStanding" type="radio" />
          <br />
          <label htmlFor="graduate">Graduate</label>
          <input id="graduate" name="classStanding" type="radio" />
        </fieldset>

        <fieldset>
          <legend>Work schedule</legend>
          <label htmlFor="full-time">Full-time</label>
          <input id="full-time" name="workSchedule" type="radio" />
          <br />
          <label htmlFor="part-time">Part-time</label>
          <input id="part-time" name="workSchedule" type="radio" />
        </fieldset>

        <fieldset>
          <legend>Interests</legend>
          <label htmlFor="languages">Languages</label>
          <input id="languages" name="interests" type="checkbox" />
          <br />
          <label htmlFor="frameworks">Frameworks</label>
          <input id="frameworks" name="interests" type="checkbox" />
          <br />
          <label htmlFor="robotics">Robotics</label>
          <input id="robotics" name="interests" type="checkbox" />
        </fieldset>

        <label htmlFor="major">Major</label>
        <select id="major" name="major" defaultValue="computer-science">
          <option value="computer-science">Computer Science</option>
          <option value="engineering">Engineering</option>
          <option value="history">History</option>
        </select>
        <br />

        <label htmlFor="topics">Topics to deepen this term</label>
        <select
          id="topics"
          name="topics"
          multiple
          defaultValue={["web-development", "accessibility"]}
        >
          <option value="web-development">Web development</option>
          <option value="accessibility">Accessibility</option>
          <option value="data-science">Data science</option>
          <option value="design">Design</option>
          <option value="robotics">Robotics</option>
        </select>
        <br />

        <label htmlFor="email">School email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="jane@university.edu"
        />
        <br />

        <label htmlFor="graduation-year">Expected graduation year</label>
        <input
          id="graduation-year"
          name="graduationYear"
          type="number"
          min={2026}
          max={2035}
          placeholder="2030"
        />
        <br />

        <label htmlFor="birth-date">Date of birth</label>
        <input id="birth-date" name="birthDate" type="date" min="1990-01-01" max="2008-12-31" />
        <br />

        <label htmlFor="excitement">How excited are you about the course? 0–10</label>
        <input
          id="excitement"
          name="excitement"
          type="range"
          min="0"
          max="10"
          defaultValue="5"
        />
        <br />

        <button id="save" type="submit">
          Save
        </button>
        <button id="cancel" type="button">
          Cancel
        </button>
      </form>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}