import styles from './LessonCard.module.scss';

interface LessonCardProps {
    lesson: {
        subject: string;
        time: string;
        room: string;
    };
    className?: string;
}

function LessonCard ({ lesson, className }: LessonCardProps) {
    return (
         <article className={`${styles.card} ${className || ''}`}>
            <span className={`${styles.card__time} ${lesson.time}`}></span>
            <h3 className={`${styles.card__title} ${lesson.subject}`}></h3>
            <p className={`${styles.card__info} ${lesson.room}`}></p>
         </article>

    );
}

export default LessonCard;