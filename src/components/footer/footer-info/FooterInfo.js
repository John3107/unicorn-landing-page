import style from './FooterInfo.module.scss'

function FooterInfo({data}) {
    return (
        <div className={style.footerInfo}>
            <span className={style.title}>{data.title}</span>
            {data.data.map((el, key) => <span className={style.link} key={key}>{el}</span>)}
        </div>
    );
}

export default FooterInfo;