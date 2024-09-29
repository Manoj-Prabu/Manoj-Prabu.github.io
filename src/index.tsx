import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
	createBrowserRouter,
	RouterProvider,
	Navigate
} from "react-router-dom";
import Knowledge from './components/Knowledge';
// import Experience from './components/Experience';
import Myself from './components/myself/Myself';
import Project from './components/projects/Project';
import Achievements from './components/achievements/Achievements';
import Resume from './components/resume/Resume';

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [{
			index: true,
			path: "/",
			element: <Navigate to="/myself" replace />
		}, {
			path: "myself",
			element: <Myself />
		}, {
			path: "skills",
			element: <Knowledge />
			// }, {
			// 	path: "experience",
			// 	element: <Experience />
		}, {
			path: 'projects',
			element: <Project />
		}, {
			path: 'achievements',
			element: <Achievements />
		}, {
			path: 'resume',
			element: <Resume />
		}]
	}
], {
	basename: '/portfolio'
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
