import style from './Footer.module.scss'
import logoStyle from '../header/header-head/HeaderHead.module.scss'
import data from '../../data/data.json'
import FooterInfo from "./footer-info/FooterInfo";
import whatsApp from "../../assets/icons/whats-app.svg";
import instagram from "../../assets/icons/instagram-icon.svg";
import dribble from "../../assets/icons/dribbble-icon.svg";
import twitter from "../../assets/icons/twitter-icon.svg";
import youtube from "../../assets/icons/youtube-icon.svg";

function Footer() {
    const icons = [instagram, dribble, twitter, youtube]

    return (
        <div className={style.footer}>
            <span className={logoStyle.title} style={{color: "#FFF"}}>logo</span>
            <div className={style.footerMain}>
                {data.footerData.map((el, key) => <FooterInfo data={el} key={key}/>)}
                <img src={whatsApp} className={style.whatsApp}/>
            </div>
            <div className={style.icons}>{icons.map((el, key) => <img src={el} key={key}/>)}</div>
        </div>
    );
}

export default Footer;