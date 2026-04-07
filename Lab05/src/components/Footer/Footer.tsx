import styles from "./Footer.module.scss";
interface FooterProps {
    className?: string;
}
function Footer ({ className }: FooterProps) {
    return (
        <div className={`${styles.footer} ${className || ''}`}>
            <footer className={styles.footer__footer}>
                <address className={styles.footer__address}>
                    Адрес:
                </address>
            </footer>
        </div>
    );
}
    export default Footer;
