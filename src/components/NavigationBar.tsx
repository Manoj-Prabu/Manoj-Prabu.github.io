import React from 'react'

function NavigationBar() {
	return <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "65px", backgroundImage: "linear-gradient(170deg, rgb(250 0 250), rgb(0 0 255))", color: "white", position: "fixed", width: "100%", zIndex: 1 }}>
		<h2 style={{ paddingLeft: "5px", cursor: "pointer" }}>Portfolio</h2>
		<div>
			<a href='#mAbout' style={{ paddingRight: "20px", cursor: "pointer", textDecoration: "none", color: "inherit" }}>About</a>
			<a href='#mExperience' style={{ paddingRight: "20px", cursor: "pointer", textDecoration: "none", color: "inherit" }}>Experience</a>
			<a href='#mKnowledge' style={{ paddingRight: "20px", cursor: "pointer", textDecoration: "none", color: "inherit" }}>Skills</a>
			<a href='' style={{ paddingRight: "20px", cursor: "pointer", textDecoration: "none", color: "inherit" }}>Education</a>
			<a href='#mContact' style={{ paddingRight: "20px", cursor: "pointer", textDecoration: "none", color: "inherit" }}>Contact</a>
		</div>
	</div>
}

export default NavigationBar