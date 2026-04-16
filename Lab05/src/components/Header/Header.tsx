import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "../../assets/pictures/logo.png";
import sun_icon from "../../assets/icons/sun_icon.png";

interface HeaderProps {
    className?: string;
}

function Header ({className}: HeaderProps) {

    const [isDark, setIsDark] = useState<boolean>(false);
    let theme = isDark ? styles.wrapper__dark : styles.wrapper__light;

    return (
        <div className={theme}>
            <div className={`${styles.header} ${className || ''}`}>
            <div className={styles.header__top}>
                <div className={styles.header__logo_container}>
                    <img src={logo} alt="логотип" className={styles.header__logo} />
                </div>
                <h1 className={styles.header__h1}>Заголовок</h1>

                <div className={styles.header__top__theme__wrapper}>
                    <button className={styles.header__top__theme__button}
                    onClick={()=>{
                        isDark? setIsDark(false)
                        : setIsDark(true)
                    }
                }>
                        <img src={sun_icon} style={{width:'3vh', filter:'invert(1)'}} alt="переключ темы"/>
                    </button>
                </div>
            </div>
              
            <nav className={styles.nav}>
            <div className={styles.nav__first}>
                        <NavLink 
                        to="/"
                        className={ 
                            ({isActive}) => 
                                `${styles.header__link} ${isActive ? styles.header__link_active : ''}`
                        }
                    >
                            Главная
                        </NavLink>
                </div>
                <ol className={styles.nav__list}>
                    
                    <li className={styles.nav__item}>
                        <NavLink 
                        to="/myfaculty"
                        className={ 
                            ({isActive}) => 
                                `${styles.header__link} ${isActive ? styles.header__link_active : ''}`
                        }
                    >
                            Мой факультет
                        </NavLink>
                    </li>
                    <li className={styles.nav__item}>
                        <NavLink 
                        to="/myfaculty"
                        className={ 
                            ({isActive}) => 
                                `${styles.header__link} ${isActive ? styles.header__link_active : ''}`
                        }
                    >
                        Моя группа
                        </NavLink>
                    </li>

                    <li className={styles.nav__item}>
                        <NavLink to="/timetable"
                        className={({isActive}) => `${styles.header__link} ${isActive ? styles.header__link_active: ''}`}
                        >Расписание</NavLink>
                    </li>

                    <li className={styles.nav__item}>
                        <NavLink to="/examstable"
                        className={({isActive}) => `${styles.header__link} ${isActive ? styles.header__link_active: ''}`}
                        >Экзамены</NavLink>
                    </li>
                </ol>
            </nav>
        </div>
        </div>
        
    );
}

export default Header;