import React, { useState } from "react";
// import NavigationBar from "./NavigationBar";
// import Carousal from "./Carousal";
// import Experience from "./Experience";
// import Knowledge from "./Knowledge";
// import Contact from "./Contact";
// import Footer from "./Footer";
import FrontPage from "./FrontPage";
import Fork from './icons/Fork';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Stack } from "@mui/material";

function Container() {
	const date = new Date();
	const year = date.getFullYear();
	const [expand, setExpand] = useState(true);

	const toggleFn = () => {
		setExpand(prev => !prev);
	};

	return <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
		<div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "5px 0px", borderBottom: "1px solid #333", backgroundColor: "#242424" }}>
			<Stack sx={{ position: 'absolute', left: '5px' }}>
				<IconButton size="small" color="secondary" onClick={toggleFn}>
					<MenuIcon />
				</IconButton>
			</Stack>
			<span style={{
				textOverflow: 'ellipsis',
				overflow: 'hidden',
				whiteSpace: 'nowrap',
				border: '1px solid rgb(119, 119, 119)',
				padding: '3px',
				width: '50%',
				textAlign: 'center',
				borderRadius: '7px',
				backgroundColor: "#333"
			}}>Manoj Prabu - <i>Software Engineer</i></span>
		</div>
		<FrontPage expandState={{ expand, setExpand }} />
		<div style={{
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			height: '15px',
			padding: '3px 5px',
			fontSize: '10px',
			backgroundColor: "#242424",
			borderTop: "1px solid #333",
			textOverflow: "ellipsis",
			overflow: "hidden",
			whiteSpace: "nowrap"
		}}>
			<Fork label={'Fork'} url={'https://github.com/Manoj-Prabu/manoj-prabu.github.io/fork'} />
			<i>Copyright &copy;{year} All rights reserved.</i>
		</div>
		{/* <NavigationBar />
		<div style={{ position: "absolute", top: "65px", width: "100%" }}>
			<Carousal />
			<Experience />
			<Knowledge />
			<Contact />
			<Footer />
		</div> */}
	</div>;
}

export default Container;
