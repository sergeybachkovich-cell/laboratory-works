import styles from './Author.module.scss';
import avatar from '../../assets/pictures/Avatar.png';

function Author () {

    return (
            <div className={styles.Author}>
        <header className={styles.Author__header}>
            <div className={styles.Author__header__info}>
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
            </div>
            <img src={avatar} alt="" />
        </header>

            <div className={styles.Author__body}>
                <section className={styles.Author__body__content}>
                {/* left side */}
                    <h2 className={styles.Author__body__content__Title}>
                        Опыт работы
                    </h2>
                    <ul className={styles.Author__body__content__List}>
                        <li className={styles.Author__body__content__Item}>
                            <h3 className={styles.Author__body__content__Item__Title}>InnovaGroup</h3>
                            <p className={styles.Author__body__content__Item__Position}></p>
                            <ul className={styles.Author__body__content__Item__Responsibilities_List}>
                                <h3 className={styles.Author__body__content__Item__Responsibilities_List__header}>
                                    Должностные обязанности:
                                </h3>
                                <li className={styles.Author__body__content__Item__Responsibilities_Item}>
                                    <p>Ведение проектов</p>
                                </li>
                                <li className={styles.Author__body__content__Item__Responsibilities_Item}>
                                    <p>Написание ТЗ для дизайнеров и back-end разработчиков</p>
                                </li>
                                <li className={styles.Author__body__content__Item__Responsibilities_Item}>
                                    <p>Верстка сайта и шаблонов для CMS</p>
                                </li>
                                <li className={styles.Author__body__content__Item__Responsibilities_Item}>
                                    <p>Проверка на кроссбраузерность</p>
                                </li>
                                <li className={styles.Author__body__content__Item__Responsibilities_Item}>
                                    <p>Рефакторинг чужого кода</p>
                                </li>
                                <li className={styles.Author__body__content__Item__Responsibilities_Item}>
                                    <p>Тестирование сайтов</p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    
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