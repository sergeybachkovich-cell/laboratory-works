
import styles from "./Hero.module.scss";
interface HeroProps {
    className?: string;
}
function Hero ({className}: HeroProps) {
    return (
        <div className={`${styles.hero} ${className || ''}`}>
            <main className={styles.hero__main}>
                <h1 className={styles.hero__h1}>
                    Заголовок для hero
                </h1>
            </main>
        </div>
    );
}

export default Hero;