import style from './Footer.module.scss'
import logoStyle from '../header/header-head/HeaderHead.module.scss'
import data from '../../data/data.json'

function App() {
    return (
        <div className={style.footer}>
            <span className={logoStyle.title} style={{color: "#FFF"}}>logo</span>
            <div className={style.links}>
                <span className={style.title}>{data.footerData.links.title}</span>
                {data.footerData.links.link.map((el, key) => <span className={style.link} key={key}>{el}</span>)}
            </div>
        </div>
    );
}

export default App;