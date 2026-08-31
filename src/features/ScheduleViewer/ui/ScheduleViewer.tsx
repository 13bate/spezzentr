import { useEffect, useState } from 'react';
import type { Schedule, ScheduleId } from '../../../shared/types/schedule.types';
import { api } from '../../../shared/api/client';
import styles from './ScheduleViewer.module.scss';

interface Props {
  scheduleId: ScheduleId;
  className?: string;
}

export const ScheduleViewer: React.FC<Props> = ({ scheduleId, className }) => {
  const [schedule, setSchedule] = useState<Schedule | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api.schedules.get(scheduleId)
      .then((data) => {
        setSchedule(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('❌ Ошибка:', err);
        setError('Не удалось загрузить расписание');
        setLoading(false);
      });
  }, [scheduleId]);

  if (loading) return <div className={styles.loading}>⏳ Загрузка расписания...</div>;
  if (error) return <div className={styles.error}>❌ {error}</div>;
  if (!schedule) return <div className={styles.empty}>📭 Расписание не найдено</div>;
  if (!schedule.isPublished) return <div className={styles.hidden}>🔒 Расписание скрыто</div>;

  return (
    <div className={`${styles.schedule} ${className || ''}`}>
      <h3 className={styles.title}>{schedule.title}</h3>
      <ul className={styles.list}>
        {schedule.content.map((item, index) => (
          <li key={index} className={styles.item}>
            <span className={styles.date}>{item.date}</span>
            {item.time && <span className={styles.time}>{item.time}</span>}
            {item.note && <span className={styles.note}>({item.note})</span>}
          </li>
        ))}
      </ul>
      <div className={styles.updated}>
        Обновлено: {new Date(schedule.updatedAt).toLocaleDateString('ru-RU')}
      </div>
    </div>
  );
};
