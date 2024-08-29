import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <div className="main-container">
      <div className="experience-container">
        <div className="circle-text circle-text1">
          <h2 className="EXPtitle">Front-End Development Intern</h2>
          <p className="Cname">Cha-Chi Communications Pvt. Ltd.</p>
          <ul>
            <li>Developed dynamic and scalable web applications using React, enhancing user engagement by 30%, reducing development time by 40% through efficient component design, and advanced state management.</li>
            <li>Integrated MongoDB and Node.js for backend, optimizing database performance and ensuring data integrity.</li>
            <li>Proficiently used Git, AWS, and JIRA ensuring 90% on-time project delivery.</li>
          </ul>
        </div>

        <div className="circle-text circle-text2">
          <h2 className="EXPtitle">Freelance Front-End Developer & UI/UX Designer</h2>
          <p className="Cname">Self Employed</p>
          <ul>
            <li>Built interactive features and components with React and React Native, increasing user engagement by 30%.</li>
            <li>Designed high-fidelity wireframes, reducing design revisions by 20% and aligning outcomes with client expectations.</li>
            <li>Conducted rigorous unit testing, achieving a 95% code coverage and reducing bug reports by 40%.</li>
          </ul>
        </div>

        <div className="circle-text circle-text3">
          <h2 className="EXPtitle">Technology Process Trainee</h2>
          <p className="Cname">Ameriprise Financial</p>
          <ul>
            <li>Developed responsive web applications, increasing traffic by 25% through cross-device compatibility.</li>
            <li>Focused on intuitive and visually appealing User Interfaces using Figma and Adobe XD.</li>
            <li>Executed advanced SQL queries on AWS Athena to extract valuable insights for decision-making.</li>
          </ul>
        </div>

        <div className="circle-text circle-text4">
          <h2 className="EXPtitle">Junior Web Developer</h2>
          <p className="Cname">Om Hra Pvt. Ltd.</p>
          <ul>
            <li>Assisted in designing web pages and applications, enhancing User Interface functionality.</li>
            <li>Collaborated with senior developers to implement multiple new web features, boosting user engagement by 20%.</li>
            <li>Executed CSS updates, enhancing design and responsiveness, leading to a 15% boost in user satisfaction.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
