import stackoverflow from '../assets/images/stack-overflow.png';
import linkedin from '../assets/images/linkedin.png';
import github from '../assets/images/github.png';
import telegram from '../assets/images/telegram.png';
import discord from '../assets/images/discord.png';
import style from "../assets/css/Footer.module.css";

function Footer() {
    return <div id='mFooter'>
        <div style={{ padding: '20px' }}>
            <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'center', alignItems: 'center', paddingBottom: "10px" }}>
                <a href="https://www.linkedin.com/in/manoj-prabu-s" target='_blank' rel="noreferrer">
                    <img src={linkedin} alt="" className={style.footerImg} title='LinkedIn' />
                </a>
                <a href="https://github.com/Manoj-Prabu#🙋🏽-manoj-prabu" target='_blank' rel="noreferrer">
                    <img src={github} alt="" className={style.footerImg} title='Github' />
                </a>
                <a href="https://stackoverflow.com/users/13753806/manojprabu" target='_blank' rel="noreferrer">
                    <img src={stackoverflow} alt="" className={style.footerImg} title='StackOverflow' />
                </a>
                <a href="https://t.me/Manoj_Prabu_S" target='_blank' rel="noreferrer">
                    <img src={telegram} alt="" className={style.footerImg} title='Telegram' />
                </a>
                <a href="https://discordapp.com/users/809396100242472970" target='_blank' rel="noreferrer">
                    <img src={discord} alt="" className={style.footerImg} title='Discord' />
                </a>
            </div>
            <div style={{ textAlign: "center" }}><i>Copyright &copy;2023 All rights reserved.</i></div>
        </div>
    </div >
}

export default Footer