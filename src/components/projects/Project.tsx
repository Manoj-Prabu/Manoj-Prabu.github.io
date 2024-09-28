import React from 'react';
import styles from './Project.module.css';

function Project() {
  return (
    <div id='mProjects' className={styles.projectBox} style={{ width: "90%", margin: "16px auto" }}>
      <h1>Professional projects</h1>
      <div style={{ background: '#242424', padding: '20px', borderRadius: '10px' }}>
        <h2>SenseOps</h2>
        <p><a href="https://www.qlik.com/us" target='_blank' rel="noreferrer">Qlik</a> is a visualization tool which gave access to all the API to managa/manipulate the data.
          Qlik provide basic visualization charts while some customers need customized vizualization. Here is were my part comes in.
          I develop Extension for customized visualization, Mashups, Web applications and services for customers who need customization with Qlik.</p>
        <p>The major project that I have been recently working on is <a href="https://www.senseops.com/" target='_blank' rel="noreferrer">SenseOps</a> in which <a href="https://www.senseops.com/app-extensions/" target='_blank' rel="noreferrer">App Extension</a> section contains all the extension that I have been developed.</p>
        <h3>Technology used</h3>
        <p><b>Programming languages: </b>HTML, CSS, JavaScript, TypeScript</p>
        <p><b>Frameworks & Libraries: </b>React.js, Node.js, Express.js, D3.js, Sequalize, JWT, Redux, Angular.js, Tailwind CSS</p>
        <p><b>Tools & Technologies: </b>Qlik Sense, Git, Bitbucket, Jira, PostgreSQL, Webpack, ESLint</p></div>
      <h1>Personal projects</h1>
      <div style={{ background: '#242424', padding: '20px', borderRadius: '10px' }}>
        <h2>Raja Rani</h2>
        <p><a href="https://raja-rani-9trb.onrender.com" target='_blank' rel="noreferrer">Raja Rani</a> an old Indian traditional game where each character need to find respective character.
          Developed with Next.js to gain hands on experience in it and used Socket.io for the live chats and for updating the movements between the players.
          Deployed in <a href="https://render.com/" target='_blank' rel="noreferrer">Render</a> which supports longer socket sessions to use the seperate room for the players.
        </p>
        <p>Note: For those who want to contribute just ping me.</p>
        <h3>Technology used</h3>
        <p><b>Programming languages: </b>HTML, CSS, JavaScript, TypeScript</p>
        <p><b>Frameworks & Libraries: </b>Next.js, React.js, Socket.io</p>
        <p><b>Tools & Technologies: </b>Git, GitHub, ESLint</p></div>
      <br />
      <div style={{ background: '#242424', padding: '20px', borderRadius: '10px' }}>
        <h2>Animations</h2>
        <p>Little kurma a 2D animation created for <a href="https://www.youtube.com/watch?v=yKQvYfKdhLM" target='_blank' rel='noreferrer'>animation contest</a> conducted by Youtube channel called Keyframe Clips.
          Learned basic concepts of 2D animations, pre production, post production editings and methods.</p>
        <p><b>Tools & Technologies: </b><a href="https://www.blender.org/" target='blank' rel='noreferrer'>Blender</a>, Audacity, OBS Studio</p></div>
    </div>
  )
}

export default Project;