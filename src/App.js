import React from 'react';
import './index.css';

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>Soham Dutta</h1>
        <nav>
          <ul>
            <li><a href="mailto:dsoham729@gmail.com">Email</a></li>
            <li><a href="tel:9641034344">Phone</a></li>
            <li><a href="https://www.linkedin.com/in/sohamdutta/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://github.com/sohamdutta" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </nav>
      </header>
      
      <section className="objective">
        <h2>Objective</h2>
        <p>
          As an experienced blockchain developer with proficiency in Rust and Solidity, I am seeking a challenging position where I can leverage my skills to contribute to innovative blockchain projects and further enhance my expertise in the field.
        </p>
      </section>

      <section className="work-experience">
        <h2>Work Experience</h2>
        <div className="job">
          <h3>Blockchain Developer</h3>
          <p><strong>Intellipaat Software Team, Remote</strong></p>
          <p><em>Duration: 6 months</em></p>
          <ul>
            <li>Developed and deployed smart contracts using Solidity on the Ethereum blockchain.</li>
            <li>Contributed to the development of decentralized applications (DApps) and implemented frontend components using web technologies.</li>
            <li>Collaborated with cross-functional teams to design and implement blockchain solutions, ensuring adherence to security best practices.</li>
          </ul>
        </div>

        <div className="job">
          <h3>Blockchain Developer</h3>
          <p><strong>WEU Foundation, Remote</strong></p>
          <p><em>Duration: July 2023 - Present</em></p>
          <ul>
            <li>Utilized Rust programming language to build smart contracts on the Substrate framework for blockchain platforms like Polkadot.</li>
            <li>Conducted testing and code reviews to ensure the reliability and security of blockchain applications.</li>
            <li>Integrated blockchain technology with external systems, databases, and APIs.</li>
          </ul>
        </div>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>Smart Contract Development: Solidity, Rust (Substrate framework)</li>
          <li>Blockchain Protocols: Ethereum, Polkadot</li>
          <li>Documentation: Code documentation, technical writing</li>
          <li>Continuous Learning: Keeping abreast of industry trends and advancements</li>
        </ul>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <ol>
          <li>
            <h3>EVM Implementation using Rust</h3>
            <p>Implemented an Ethereum Virtual Machine (EVM) using Rust, allowing for the execution of smart contracts in a decentralized environment.</p>
          </li>
          {/* Add more projects */}
        </ol>
      </section>

      <section className="education">
        <h2>Education</h2>
        <p>
          <strong>Bachelor's Degree:</strong> English Graduation, 2017 - 2021, IGNOU<br />
          <strong>Presently:</strong> MBA in Financial Management, IGNOU
        </p>
      </section>

      <footer>
        <p>Additional Tools: Truffle, Hardhat</p>
      </footer>
    </div>
  );
}

export default App;
