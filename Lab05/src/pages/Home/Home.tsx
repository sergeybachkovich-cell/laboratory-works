import Hero from '../../components/Hero/Hero';
import style from './Home.module.scss';

function Home () { /*передалал на function с const*/ 
    return (
        <main className={style.home}> // почему тут без стилей
            <Hero />
            <section className={style.home__content}>
                <h1 className={style.home__title}>Добро пожаловать в Weblab5</h1>
                <p className={style.home__description}>Это глваная страница приложения</p>
                На титульной странице сайта (index.html), представляются сведения о вузе
                (+фото), авторе (+фото), контактная информация
            </section>
        </main>
    );
}

export default Home;