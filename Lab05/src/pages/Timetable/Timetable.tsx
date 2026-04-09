import LessonCard from '../../components/LessonCard/LessonCard';
import s from './Timetable.module.scss';

const MOCK_LESSONS = [
    { id: 1, subject: 'Проектирование интерфейсов', time: '10:00', room: '201' },
    { id: 2, subject: 'Урок 2', time: '11:00', room: '202'},
    { id: 3, subject: 'Урок 4', time: '12:00', room: '203'},
]
function Timetable () {
    return (
        <div className={s.timetable}>
            <h1 className={s.timetable__title}>Расписание</h1>
            <div className={s.timetable__list}>
                
                {MOCK_LESSONS.map(item => (
                  <LessonCard
                    key={item.id}
                    lesson={item}
                    className={s.timetable__item}
                  />
                ))}
            </div>
        </div>
    );
}

export default Timetable;