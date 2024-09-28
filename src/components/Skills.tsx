import HTML from "./icons/html";
import CSS from "./icons/css";
import JS from "./icons/javascript";
import JQuery from "./icons/jquery";
import ReactIcon from "./icons/react";
import Router from "./icons/router";
import TS from "./icons/typescript";
import Angular from "./icons/angular";
import Node from "./icons/node";
import Express from "./icons/expressjs";
import MUI from "./icons/mui";
import ChartJS from "./icons/chartjs";
import WebPack from "./icons/webpack";
import ESLint from "./icons/eslint";
import Postgres from "./icons/postgres";
import Postman from "./icons/postman";
import Qlik from "./icons/qlik";
import Git from "./icons/git";
import SocketIO from './icons/socketio';
import Sequelize from "./icons/sequelize";

interface Skill {
	name: string,
	icon: React.FC
}
const SkillsList: Skill[] = [
	{ name: 'HTML', icon: HTML },
	{ name: 'CSS', icon: CSS },
	{ name: 'JavaScript', icon: JS },
	{ name: 'JQuery', icon: JQuery },
	{ name: 'React', icon: ReactIcon },
	{ name: 'Router', icon: Router },
	{ name: 'TypeScript', icon: TS },
	{ name: 'Angular', icon: Angular },
	{ name: 'Node', icon: Node },
	{ name: 'Express', icon: Express },
	{ name: 'Socket.io', icon: SocketIO },
	{ name: 'MUI', icon: MUI },
	{ name: 'ChartJS', icon: ChartJS },
	{ name: 'WebPack', icon: WebPack },
	{ name: 'ESLint', icon: ESLint },
	{ name: 'Postgres', icon: Postgres },
	{ name: 'Sequelize', icon: Sequelize },
	{ name: 'Postman', icon: Postman },
	{ name: 'Extensions', icon: Qlik },
	{ name: 'Mashups', icon: Qlik },
	{ name: 'Web Apps', icon: Qlik },
	{ name: 'Git', icon: Git },
]

export default SkillsList