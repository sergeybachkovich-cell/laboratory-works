import style from './Home.module.scss';
import Author from '../../components/Author/Author';

function Home () { /*передалал на function с const*/ 
    return (
        <main className={style.home}>
            <section className={style.home__content}>
                <Author></Author>
            </section>
        </main>
    );
}

export default Home;