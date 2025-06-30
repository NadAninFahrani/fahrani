import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Nadya A. Fahrani CV</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      
      </header>
      <div className="cont">
        <div className="intro-head">
          <img src="/images/photobasket.png" className="profile-img"></img>
          <div className="burrow">
            <img src="/images/phone-icon.png" className="phone-icon"></img>
            <p>081285172900</p>
          </div>
          <div className="burrow" >
            <img src="/images/email-icon.png" className="email-icon"></img>
            <p>nadya.fahrani9@gmail.com</p>
          </div>
          <div className="burrow" >
            <img src="/images/insta-icon.png" className="insta-icon" ></img>
            <p>nadyaa.hartanto</p>
          </div>

          <div className="tech-skills">
            <h3>TECHNICAL SKILLS</h3>
            <p>Langauges: Python, Javascript, HTML & CSS</p>
            <p>Framework: Flask (beginner)</p>
            <p>Tools: VSCode, Figma</p>
          </div>

          <div className="edu" >
            <h3>EDUCATION</h3>
            <h6>Jakarta International College, ID</h6>
            <p>MUFY PROGRAM YEAR (2025)</p>
            
            <h6>Mentari Intercultural School Jakarta, ID</h6>
            <p>Year 10 (2023-2024)</p>

            <h6>Al Jabr Islamic School, ID</h6>
            <p>Year 7 - Year 9 (2020-2023)</p>

            <h6>Sekolah Indonesia Singapura, SG</h6>
            <p>Year 5 - Year 6 (2018-2019)</p>

            <h6>Near York, USA</h6>
            <p>Year 1 - Year 4 (2014-2018)</p>
          </div>

          <div className="interests" >
            <h3>INTERESTS</h3>
            <p>- Web Development, UI/UX Design</p>
            <p>- Music (Guitar - Electrical and Classical)</p>
            <p>- Literature and Leadership</p>
          </div>

          <div className="language" >
            <h3>LANGUAGES</h3>
            <p>- English (Fluent)</p>
            <p>- Bahasa Indonesia (Fluent)</p>
          </div>
        </div>

        <div className="main-prof">
          <div className="intro" >
            <h1>PROFILE</h1>
            <p>An adaptable and determined student currently finishing the MUFY
            program at Jakarta International College. Taking the lead in schoolwork and
            extra activities and showing a strong history of leading teams and making
            events successful. Enthusiastic about learning things by actually doing them,
            mainly in technology and team settings. Enthuiastic to continuously improve
            leadership skills and get useful experience in IT, software development, and
            project management.
            </p>

          </div>

          <div className="proj" >
            <h1>TECHNICAL PROJECTS</h1>
            <div className="twenty-five" >
              <h2>2025: <a className="link" href="https://dewaary.pythonanywhere.com/">CLICK HERE</a></h2>
              <h3>Housing Installments & Budgeting Calculator (HTML, CSS, JavaScript, Python, SQL)</h3>
              <p>
                - Developed a housing installment calculator and a financial budgeter designed to help young adults (20-25) achieve financial awareness.
              </p>
              <p>
                - Focused on financial literacy and stability by enabling users to stimulate
                payment plans monthly and monthly budget.
              </p>
            </div>

            <div className="twenty-three" >
              <h2>2023: <a className="link" href="https://nadya-fahrani-pp.vercel.app/index.html">CLICK HERE</a></h2>
              <h3>Dangers of Social Media Awareness Project (HTML, CSS, JavaScript)</h3>
              <p>
                - Created a personal interactive website teaching the mental side effects of social media addition. 
              </p>
              <p>
                - Implimented journals to track progress saved automatically in the users device.
              </p>
              <p>
                - Promoted in Mentari to gain attention and to encourage students to speak up.
              </p>
            </div>
          </div>

          <div className="exp" >
            <h1>EXPERIENCE</h1>
            <div className="gnota">
              <h2>Intern - GNOTA (2024)</h2>
              <p>- Managed social media marketing; introduced platforms like TikTok & Instagram</p>
              <p>- Assisted in minor IT tasks such as creating digital newsletters</p>
            </div>

            <div className="bri" >
              <h2>Intern - BRI International Business Division (2024)</h2>
              <p>- Exposed to international business and bank coorespondence</p>
              <p>- Learned about exporting and importing</p>
            </div>
          </div>

          <div className="lead-act">
            <h1>LEADERSHIP & ACTIVITIES</h1>
            <p>- Captain, JIC Basketball Team (2025)</p>
            <p>- Vice-president, JIC Music Club (2025)</p>
            <p>- Performed Electric Guitar in Purwacaraka Event (2025)</p>
            <p>- Co-Head, Patterns of Hope (Charity Event, 2024): Coordinated 90+ peers, sponsors, and raised 120M IDR for disabled and impaired children.</p>
            <p>- Co-Captain, MISJ Basketball Team (2024)</p>
            <p>- Performed Classical Guitar in Purwacaraka Concert (2024)</p>
            <p>- Guest Speaker, Al Jabr & SIS (2022 - 2023)</p>
            <p>- Taught science using sign language to impaired children (2023)</p>
            <p>- Captain, JSSL Football Team (2020)</p>
            <p>- Captain, PS 101 Ballroom Dancing (2015)</p>
          </div>
        </div>
      </div>
    </div>

    
  );
}

export default App;
