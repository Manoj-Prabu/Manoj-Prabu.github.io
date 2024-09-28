import React, { useState } from 'react';
import style from "../assets/css/FrontPage.module.css";
// import stackoverflow from '../assets/images/stack-overflow.png';
import linkedin from '../assets/images/linkedin.png';
import github from '../assets/images/github.png';
import telegram from '../assets/images/telegram.png';
import discord from '../assets/images/discord.png';
import Mail from "@mui/icons-material/Mail";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Settings from "@mui/icons-material/Settings";
import { Outlet, NavLink } from 'react-router-dom';
import { IconButton, Stack } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

type propsType = {
    expandState: {
        expand: boolean
        setExpand: React.Dispatch<React.SetStateAction<boolean>>
    }
}
function FrontPage({ expandState }: propsType) {
    const { expand, setExpand } = expandState;

    return (
        <div className={style.gridSection}>
            <div style={{ gridArea: 'right', display: 'flex', width: expand ? "260px" : '30px', backgroundColor: "#242424", position: 'relative' }}>
                <div className={style.social}>
                    <div style={{ display: "flex", flexDirection: "column", width: "30px" }}>
                        <a href="https://www.linkedin.com/in/manoj-prabu-s" target='_blank' rel="noreferrer" title='LinkedIn' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <img src={linkedin} alt="" className={style.connection} />
                        </a>
                        <a href="https://github.com/Manoj-Prabu#🙋🏽-manoj-prabu" target='_blank' rel="noreferrer" title='Github' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <img src={github} alt="" className={style.connection} />
                        </a>
                        {/* <a href="https://stackoverflow.com/users/13753806/manojprabu" target='_blank' rel="noreferrer" title='StackOverflow' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <img src={stackoverflow} alt="" className={style.connection} />
                        </a> */}
                        <a href="https://t.me/Manoj_Prabu_S" target='_blank' rel="noreferrer" title='Telegram' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <img src={telegram} alt="" className={style.connection} />
                        </a>
                        <a href="https://discordapp.com/users/809396100242472970" target='_blank' rel="noreferrer" title='Discord' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <img src={discord} alt="" className={style.connection} />
                        </a>
                    </div>
                    <div style={{ position: "absolute", bottom: '0px', width: "30px" }}>
                        <a href='mailto:manojprabucoc@gmail.com' style={{ display: "flex" }} title='Say Hello! 👋🏽'>
                            <Mail className={style.connection} style={{ color: "white" }} />
                        </a>
                        <span style={{ display: "flex" }}>
                            <Settings className={style.connection} />
                        </span>
                    </div>
                </div>
                <div style={{ display: expand ? 'block' : 'none', width: "260px", borderRight: "1px solid #333" }}>
                    <div style={{ padding: "10px", fontSize: "10px" }}>EXPLORER
                        <KeyboardArrowLeftIcon sx={{ display: expand ? 'block' : 'none', position: 'absolute', right: '0', top: '6px', cursor: 'pointer' }} onClick={() => setExpand(false)} color='secondary' />
                    </div>
                    <div className={style.mpAccordion}><NavLink to={'myself'} className={({ isActive }) => isActive ? style.activeSection : ''}><KeyboardArrowRight style={{ height: "14px" }} />Myself</NavLink></div>
                    <div className={style.mpAccordion}><NavLink to={`skills`} className={({ isActive }) => isActive ? style.activeSection : ''}><KeyboardArrowRight style={{ height: "14px" }} />Experience</NavLink></div>
                    {/* <div className={style.mpAccordion}><NavLink to={'experience'} className={({ isActive }) => isActive ? style.activeSection : ''}><KeyboardArrowRight style={{ height: "14px" }} />Experience</NavLink></div> */}
                    <div className={style.mpAccordion}><NavLink to={'projects'} className={({ isActive }) => isActive ? style.activeSection : ''}><KeyboardArrowRight style={{ height: "14px" }} />Projects</NavLink></div>
                    <div className={style.mpAccordion}><NavLink to={'achievements'} className={({ isActive }) => isActive ? style.activeSection : ''}><KeyboardArrowRight style={{ height: "14px" }} />Achievements</NavLink></div>
                    {/* <div className={style.mpAccordion}><KeyboardArrowRight />Resume</div> */}
                </div>
            </div>
            <div style={{ overflow: "auto", width: "100%" }}>
                <Outlet />
            </div>
        </div>
    )
}

export default FrontPage