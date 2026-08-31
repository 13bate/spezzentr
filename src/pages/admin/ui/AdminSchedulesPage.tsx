import { useState, useEffect } from 'react';
import { api } from '../../../shared/api/client';
import type { ScheduleId } from '../../../shared/types/schedule.types';
import styles from './AdminSchedulePage.module.scss';
import { ScheduleEditor } from '../../../features/Admin/ScheduleEditor';
import { Button } from '../../../shared/ui/Button';

interface ScheduleItem {
  id: string;
  title: string;
}

export const AdminSchedulesPage = () => {
  const [schedules, setSchedules] = useState<ScheduleItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<ScheduleId | null>(null);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    api.schedules.list()
      .then((data) => {
        setSchedules(data);
        setLoading(false);
      })
      .catch(() => {
        setSchedules([]);
        setLoading(false);
      });
  }, [refresh]);


  if (loading) {
    return <div className={styles.loading}>Загрузка...</div>;
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>📅 Управление расписаниями</h1>

      <div className={styles.list}>
        {schedules.map((schedule) => (
          <div key={schedule.id} className={styles.item}>
            <span className={styles.itemTitle}>{schedule.title}</span>
            <div className={styles.itemActions}>
              <Button
                onClick={() => setEditingId(schedule.id as ScheduleId)}
                variant="liquid"
                size="sm"
              >
                Редактировать
              </Button>
            </div>
          </div>
        ))}
      </div>

      {editingId && (
        <ScheduleEditor
          scheduleId={editingId}
          isOpen={true}
          onClose={() => setEditingId(null)}
          onSave={() => {
            setRefresh(!refresh);
            setEditingId(null);
          }}
        />
      )}
    </div>
  );
};
