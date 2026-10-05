export default function Tables() {
  return (
    <div id="wd-tables">
      <h4>Table Tag</h4>
      <table border={1} width="100%">
        <thead>
          <tr>
            <th>Quiz</th>
            <th align="center">Topic</th>
            <th align="center">Date</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Q1</td>
            <td align="center">HTML</td>
            <td align="center">2/3/21</td>
            <td align="right">85</td>
          </tr>
          <tr>
            <td>Q2</td>
            <td align="center">CSS</td>
            <td align="center">2/10/21</td>
            <td align="right">90</td>
          </tr>
          <tr>
            <td>Q3</td>
            <td align="center">JavaScript</td>
            <td align="center">2/17/21</td>
            <td align="right">95</td>
          </tr>
          <tr>
            <td>Q4</td>
            <td align="center">DOM</td>
            <td align="center">2/24/21</td>
            <td align="right">88</td>
          </tr>
          <tr>
            <td>Q5</td>
            <td align="center">Forms</td>
            <td align="center">3/3/21</td>
            <td align="right">92</td>
          </tr>
          <tr>
            <td>Q6</td>
            <td align="center">Accessibility</td>
            <td align="center">3/10/21</td>
            <td align="right">94</td>
          </tr>
          <tr>
            <td>Q7</td>
            <td align="center">Responsive Design</td>
            <td align="center">3/17/21</td>
            <td align="right">89</td>
          </tr>
          <tr>
            <td>Q8</td>
            <td align="center">Flexbox</td>
            <td align="center">3/24/21</td>
            <td align="right">91</td>
          </tr>
          <tr>
            <td>Q9</td>
            <td align="center">Grid Layout</td>
            <td align="center">3/31/21</td>
            <td align="right">96</td>
          </tr>
          <tr>
            <td>Q10</td>
            <td align="center">Project Review</td>
            <td align="center">4/7/21</td>
            <td align="right">93</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>Average</td>
            <td align="right">91</td>
          </tr>
        </tfoot>
      </table>

      <br /> <br />

      <h5>My table</h5>
      <table align="center" border={1} width="100%" id="wd-your-table">
        <thead>
          <tr>
            <th>Day/Course</th>
            <th>CS5010</th>
            <th>CS5011</th>
            <th>CS5610</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Monday</th>
            <td align="center">None</td>
            <td align="center">2:50 - 4:20</td>
            <td align="center">6:00 - 9:00</td>
          </tr>
          <tr>
            <th>Tuesday</th>
            <td align="center">3:25 - 5:05</td>
            <td align="center">None</td>
            <td align="center">None</td>
          </tr>
          <tr>
            <th>Friday</th>
            <td align="center">3:25 - 5:05</td>
            <td align="center">None</td>
            <td align="center">None</td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}