import React, { useRef } from 'react'
import style from '../assets/css/Knowledge.module.css'
import SkillsList from './Skills';
//Experience imports
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import DescriptionIcon from '@mui/icons-material/Description';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

function Knowledge() {
	const ref = useRef<HTMLDivElement | null>(null)

	const onHover = (e: any) => {
		e.target.childNodes[0].firstChild.style["transform"] = "scale(1.2)"
		e.target.childNodes[0].lastChild.style["display"] = "block"
	}
	const onLeave = (e: any) => {
		e.target.childNodes[0].firstChild.style["transform"] = "scale(1)"
		e.target.childNodes[0].lastChild.style["display"] = "none"
	}

	const calcYear = () => {
		const currYear = new Date().getFullYear();
		const currMonth = new Date().getMonth();
		const experience = +(currYear + '.' + currMonth) - (2019.8);
		return experience;
	}

	return <><div id='mKnowledge' style={{ width: "90%", margin: "16px auto" }}>
		<h1>Tech Skills</h1>
		<div style={{ background: '#242424', padding: '20px', borderRadius: '10px', display: 'flex', flexWrap: "wrap", justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
			{SkillsList.map((skill, index) => (
				<div className={style.skills} ref={ref} key={index} style={{ height: "80px", width: "80px", padding: "15px 10px 0 10px", textAlign: "center", borderRadius: "4px" }} onMouseEnter={onHover} onMouseLeave={onLeave}>
					<div style={{ "pointerEvents": "none" }}>
						<skill.icon />
						<p style={{ display: "none" }}>{skill.name}</p>
					</div>
				</div>
			))}
		</div>
	</div >

		<div id='mExperience' style={{ width: "90%", margin: "16px auto" }}>
			<h1>Experience</h1>
			<Timeline style={{ background: '#242424', padding: '20px', borderRadius: '10px' }}
				sx={{
					[`& .${timelineItemClasses.root}:before`]: {
						flex: 0,
						padding: 0,
					},
				}}
			>
				<TimelineItem>
					<TimelineSeparator>
						<TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
						<TimelineDot color="primary">
							<LaptopMacIcon />
						</TimelineDot>
						<TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
					</TimelineSeparator>
					<TimelineContent sx={{ py: '12px', px: 2 }}>
						<span><b>Software Engineer </b><i><a href={'https://gain-insights.com/'}>@ GainInsights Solutions</a></i></span>
						<br />
						<small><code>Sep 2019</code> - <code>Present</code></small>
					</TimelineContent>
				</TimelineItem>
			</Timeline >
			<div style={{ fontSize: '14px', textAlign: 'justify', lineHeight: 1.5 }}>
				I'm a software developer with {calcYear()} years of experience in web development using
				HTML, CSS, JavaScript, React.js, Typescript, Node.js, Express.js and so on.
				Worked in numerous projects from Requirements gathering to Deployment with various technologies.
			</div>
			<br />
			<NavLink to={'../resume'}>
				<Button variant="outlined" startIcon={<DescriptionIcon />}>Resume</Button>
			</NavLink>
		</div ></>
}

export default Knowledge;