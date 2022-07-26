import style from './HeaderBody.module.scss'
import mainImage from '../../../assets/icons/main-image.svg'
import data from '../../../data/data.json'

function HeaderBody() {
    return (
        <div className={style.headerBody}>
            <div className={style.head}>
                <img src={mainImage}/>
                <div className={style.main}>
                    <span className={style.title}>{data.hero.title}</span>
                    <span className={style.description}>{data.hero.description}</span>
                </div>
            </div>
        </div>
    );
}

export default HeaderBody;