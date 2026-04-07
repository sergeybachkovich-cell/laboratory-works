import s from './Timetable.module.scss';

function Timetable () {
    return (
        <main className={s.timetable}>
            <h1 className={s.timetable__title}>Расписание</h1>
            <p className={s.timetable__description}>
                Данные о занятиях
            </p>
        </main>
    );
}

export default Timetable;