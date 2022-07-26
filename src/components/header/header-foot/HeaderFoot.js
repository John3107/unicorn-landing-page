import style from './HeaderFoot.module.scss'
import data from '../../../data/data.json'

function HeaderFoot() {
    return (
        <div className={style.headerFoot}>
            <span className={style.text}>{data.about.text}</span>
            <div className={style.text}>{data.about.list.title}
                <ul>{
                    data.about.list.elements.map((el, key) => <li key={key}>{el}</li>)
                }</ul>
            </div>
        </div>
    );
}

export default HeaderFoot;