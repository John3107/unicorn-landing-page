import style from './Body.module.scss'
import data from '../../data/data.json'
import bulb from '../../assets/icons/bulb.svg'
import lock from '../../assets/icons/lock.svg'
import planet from '../../assets/icons/planet.svg'
import printer from '../../assets/icons/printer.svg'

function Body() {

    const icons = [planet, printer, lock, bulb, planet]

    return (
        <div className={style.body}>
            {
                data.orders.map((el, key) => <div key={key}
                                                  className={style.section}
                                                  style={key === 1 ? {background: "#5A3661"} : null}>
                    <img src={icons[key]} className={style.icon}/>
                    <span className={style.price}>{el.price}</span>
                    <span className={style.title}>{el.title}</span>
                    <span className={style.description}
                          style={{color: key === 1 ? "#FFF" : null , margin: "0"}}>LTD Company Package</span>
                    <span className={style.description}
                          style={key === 1 ? {color: "#FFF"} : null}>{el.description}</span>
                    <span className={style.price}>£ 55</span>
                    <span className={style.cashBack}
                          style={key === 1 ? {color: "#FFF"} : null}>Cash Back</span>
                    <button>Get started</button>
                </div>)
            }
        </div>
    );
}

export default Body;

//className={key === 1 ? style.sectionPurple : style.section}