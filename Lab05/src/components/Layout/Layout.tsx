import { Outlet } from 'react-router-dom'; 
import styles from "./Layout.module.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout () {
    return (
        <div className={styles.layout}>
            <Header className={styles.layout__header}></Header>
            <main className={styles.layout__container}>
                <Outlet></Outlet>
            </main>

            <Footer className={styles.layout__footer}></Footer>
        </div>
    );
}

export default Layout;