import style from './HeaderHead.module.scss';

function HeaderHead() {
    const data = ['Banking', 'About Us']
    return (
        <div className={style.headerHead}>
            <div className={style.nav}>
                <span className={style.title}>logo</span>
                <div className={style.navigation}>{
                    data.map((el, key) => {
                        return <div className={style.menu} key={key}>
                            <span className={style.name}>{el}</span>
                            <div className={style.arrow}></div>
                        </div>
                    })}
                    <button>Enquire Now</button>
                </div>
            </div>
            <div className={style.breadCrumbs}>Home / Company Formations / <span className={style.companies}>Companies</span></div>
        </div>
    );
}

export default HeaderHead;