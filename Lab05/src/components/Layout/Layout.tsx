import { Outlet } from 'react-router-dom'; // почему относительный путь прямой
import styles from "./Layout.module.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout (/*{children}: {children: React.ReactNode} - почему был удален*/) {
    return (
        <div className={styles.layout}>
            <Header className={styles.layout__header}></Header>
            <main className={styles.layout__container}>
                <Outlet></Outlet>
            </main>
            // у тебя футер в диве, и почему не мейн
            <Footer className={styles.layout__footer}></Footer>
        </div>
    );
}

export default Layout;