import styles from './MyFaculty.module.scss';

function MyFaculty () {
    return (
        <div className={styles.MyFaculty}>
            <section className={styles.MyFaculty__header}>
                <h1 className={styles.MyFaculty__header__Title}>факультет физики и информационных технологий</h1>
                <address className={styles.MyFaculty__header__address}>
                    <h2 className={styles.MyFaculty__header__address__title}>
                        Контакты
                    </h2>
                    <p className={styles.MyFaculty__header__address__paragraph}>
                        <span className={styles.MyFaculty__header__address__paragraph__bold_part}>Адрес</span>
                        246019, Республика Беларусь, г. Гомель, ул Советская, 102, кабинет 2-9
                    </p>
                    <p className={styles.MyFaculty__header__address__paragraph}>
                        <span className={styles.MyFaculty__header__address__paragraph__bold_part}>Телефон</span>
                        <span className={styles.MyFaculty__header__address__paragraph__telephon}>+375-232-50-38-59</span>
                    </p>
                    <p className={styles.MyFaculty__header__address__paragraph}>
                        <span className={styles.MyFaculty__header__address__paragraph__bold_part}>E-mail:</span>
                        <a href="phys_dec@gsu.by" className={styles.MyFaculty__header__address__link} target='blank'>phys_dec@gsu.by</a>
                    </p>
                    <p className={styles.MyFaculty__header__address__paragraph}>
                        <span className={styles.MyFaculty__header__address__paragraph__bold_part}>E-mail:</span>
                        <a href="https://physfac.gsu.by/" className={styles.MyFaculty__header__address__link} target='blank'>https://physfac.gsu.by/</a>
                    </p>
                </address>
            </section>

            <section className={styles.MyFaculty__Decan}>
                <div className={styles.MyFaculty__Decan__photo_dekana}>
                    <img src="https://gsu.by/sites/default/files/inline-images/departments/deans/deans-depart-08-physics.JPG" alt="фото декана" />
                </div>
                <h1 className={styles.MyFaculty__Decan__Title}>Декан</h1>
                <p className={styles.MyFaculty__Decan__paragraph}>
                        <span className={styles.MyFaculty__Decan__paragraph__bold_part}>Самофалов Андрей Леонидович,</span>
                </p>
                <p className={styles.MyFaculty__Decan__paragraph}>
                    кандидат физико-математических наук, доцент
                </p>
                <p className={styles.MyFaculty__Decan__paragraph}>
                        <span className={styles.MyFaculty__Decan__paragraph__bold_part}>Телефон:</span>
                        <span className={styles.MyFaculty__Decan__paragraph__telephon}>Телефон:</span>
                </p>
                <p className={styles.MyFaculty__Decan__paragraph}>
                        <span className={styles.MyFaculty__Decan__paragraph__bold_part}>E-mail:</span>
                        <a href="phys_dec@gsu.by" className={styles.MyFaculty__Decan__paragraph__link} target='blank'>phys_dec@gsu.by</a>
                </p>
            </section>
        </div>
    )
}

export default MyFaculty;