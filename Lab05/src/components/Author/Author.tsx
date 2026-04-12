import styles from './Author.module.scss';

function Author () {
    return (
        <div className={styles.Author}>
        <header className={styles.Author__header}>
            <h1 className={styles.Author__header__Title}>
                Имя Фамилия Отчество
            </h1>
            
            <p className={styles.Author__header__position}>
                Фронтенд-разработчик
            </p>

            <address className={styles.Author__header__address}>
                <span className={styles.Author__header__location}>
                    Гомель
                </span>
                <span className={styles.Author__header__age}>
                    22 года
                </span>
            </address>
        </header>

            <div className={styles.Author__body}>
                <section className={styles.Author__body__content}>
                {/* left side */}
                    <h2 className={styles.Author__body__content__Title}>
                        Опыт работы
                    </h2>
                    
                    
                </section>

                <section className={styles.Author__body__aside}>
                    <h2 className={styles.Author__body__aside__Title}>
                        Контакты
                    </h2>
                </section>
            </div>
        
        </div>
    );
    
}

export default Author;