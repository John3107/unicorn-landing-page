import style from './Header.module.scss';
import HeaderHead from "./header-head/HeaderHead";
import HeaderBody from "./header-body/HeaderBody";
import HeaderFoot from "./header-foot/HeaderFoot";

function Header() {
    return (
        <div className={style.header}>
            <HeaderHead/>
            <HeaderBody/>
            <HeaderFoot/>
        </div>
    );
}

export default Header;