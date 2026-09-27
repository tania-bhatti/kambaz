export default function YourForm(){
  return (
    <div>
      <br />
      <label htmlFor="first-name">First Name:</label>
      <input type="text" title="First Name" id="first-name" />
      <br /> 
      <label htmlFor="last-name">Last Name:</label>
      <input type="text" title="Last Name" id="last-name" />
      <br />
      <label htmlFor="password">Password:</label>
      <input 
        type="password"
        defaultValue="123@#$asd"
        id="password"
      />
      <br />

      <textarea 
        id="textarea" 
        cols={30} 
        rows={10}
        defaultValue="I'm taking this course because I want to learn more about web development since I'm interested in it as a career.">
      </textarea>
      <br />

      <label>What year are you?</label>
      <br />
      <input type="radio" name="radio-year" id="radio-first-year"/>
      <label htmlFor="radio-first-year">First Year</label>
      <br />
      <input type="radio" name="radio-year" id="radio-second-year"/>
      <label htmlFor="radio-second-year">Second Year</label>
      <br />
      <input type="radio" name="radio-year" id="radio-third-year"/>
      <label htmlFor="radio-third-year">Third Year</label>
      <br />
      <input type="radio" name="radio-year" id="radio-fourth-year"/>
      <label htmlFor="radio-fourth-year">Fourth Year</label>
      <br />
      <input type="radio" name="radio-year" id="radio-fifth-year"/>
      <label htmlFor="radio-fifth-year">Fifth Year</label>
      <br />

      <label>What campus were you on your first semester?</label>
      <br />
      <input type="radio" name="radio-campus" id="radio-boston"/>
      <label htmlFor="radio-boston">Boston</label>
      <br />
      <input type="radio" name="radio-campus" id="radio-oakland"/>
      <label htmlFor="radio-oakland">Oakland</label>
      <br />
      <input type="radio" name="radio-campus" id="radio-london"/>
      <label htmlFor="radio-london">London</label>
      <br />
      <input type="radio" name="radio-campus" id="radio-new-york"/>
      <label htmlFor="radio-new-york">New York</label>
      <br />

      <label>What type of career are you interested in?</label>
      <br />
      <input type="checkbox" name="check-career" id="check-ml" />
      <label htmlFor="check-ml">Machine Learning</label>
      <br />
      <input type="checkbox" name="check-career" id="check-front-end" />
      <label htmlFor="check-front-end">Frontend Development</label>
      <br />
      <input type="checkbox" name="check-career" id="check-uiux" />
      <label htmlFor="check-uiux">UI/UX</label>
      <br />
      <input type="checkbox" name="check-career" id="check-cloud-engineering" />
      <label htmlFor="check-cloud-engineering">Cloud Engineering</label>
      <br />

      <label>What's your major? Select one</label>
      <br />
      <select id="select-one-major" defaultValue="compsci">
        <option value="compsci">Computer Science</option>
        <option value="datasci">Data Science</option>
        <option value="cyber">Cybersecurity</option>
        <option value="meche">Mechanical Engineering</option>
        <option value="electrical">Electrical Engineering</option>
      </select>
      <br />

      <label>Topics you want to deepen this term? Select multiple</label>
      <br />
      <select 
        multiple
        id="select-multiple topics"
        defaultValue={["IxD", "UX"]}
      >
        <option value="IxD">Interaction Design</option>
        <option value="UX">Experience Design</option>
        <option value="algo-and-ds">Algorithms and Data Structures</option>
        <option value="ai">Artificial Intelligence</option>
      </select>
      <br />

      <label htmlFor="email">Email: </label>
      <input
        type="email"
        placeholder="email@somewhere.com"
        id="email"
      />
      <br />

      <label htmlFor="yog">Expected Graduation Year: </label>
      <input
        type="number"
        defaultValue="2027"
        placeholder="2027"
        min={2027}
        max={2039}
        id="yog"
      />
      <br />

      <label htmlFor="birthday">Email: </label>
      <input
        type="date"
        defaultValue="2002-01-01"
        min="2000-01-01"
        max="2008-01-01"
        id="birthday"
      />
      <br />

      <label htmlFor="course-rating">How excited are you to take this course? </label>
      <input
        type="range"
        defaultValue="5"
        min="1"
        max="10"
        id="course-rating"
      />
      <br />

      <button id="save" type="submit">
        Save
      </button>
      <button id="cancel" type="button">
        Cancel
      </button>
    </div>
  )
}