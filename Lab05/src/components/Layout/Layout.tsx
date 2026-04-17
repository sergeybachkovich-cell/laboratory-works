import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom'; 
import styles from "./Layout.module.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout () {
    const [isDark, setIsDark] = useState<boolean>(() => {
        if (localStorage.getItem('isDark') === 'dark')
            return true;
        return false;
    });

    const toggleTheme = (): void => {setIsDark(prev => !prev)};

    // use the effect
    useEffect (() => {
        const themeValue = isDark ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', themeValue);

        localStorage.setItem('isDark', themeValue);

        console.log(`Theme switched to: ${themeValue}`);
    }, [isDark]);

    return (
        <div className={styles.layout}>

            <Header toggleTheme={toggleTheme} isDark={isDark} />
            <main className={styles.layout__container}>
                <Outlet></Outlet>
            </main>

            <Footer className={styles.layout__footer}></Footer>
        </div>
    );
}

export default Layout;