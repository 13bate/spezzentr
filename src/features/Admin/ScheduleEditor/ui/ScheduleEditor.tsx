import { useState, useEffect } from 'react';
import styles from './ScheduleEditor.module.scss';
import { Modal } from '../../../../shared/ui/Modal/index.ts';
import { Input } from '../../../../shared/ui/Input/index.ts';
import type { Schedule, ScheduleItem, ScheduleId } from '../../../../shared/types/schedule.types.ts';
import { api } from '../../../../shared/api/client.ts';

interface Props {
  scheduleId: ScheduleId;
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

// ✅ Исправленный маппинг заголовков
const scheduleTitles: Record<ScheduleId, string> = {
  'weapon-safety-schedule': 'Расписание экзаменов БИКОСО',
  'competitions-schedule': 'Расписание соревнований',
  'tactical-medicine-schedule': 'Расписание тактической медицины',
  'periodic-check-schedule': 'Расписание периодической проверки', // ← исправлено!
};

// Маппинг: scheduleId → имя файла
const fileNames: Record<ScheduleId, string> = {
  'weapon-safety-schedule': 'Расписание экзаменов БОО',
  'competitions-schedule': 'competitions-schedule',
  'tactical-medicine-schedule': 'tactical-medicine-schedule',
  'periodic-check-schedule': 'training-schedule',
};

export const ScheduleEditor: React.FC<Props> = ({ scheduleId, isOpen, onClose, onSave }) => {
  const [items, setItems] = useState<ScheduleItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const fileName = fileNames[scheduleId] || scheduleId;
      fetch(`/spezzentr/content/schedules/${fileName}.json`)
        .then((res) => {
          if (!res.ok) throw new Error('Ошибка загрузки');
          return res.json();
        })
        .then((data) => {
          setItems(data.content || []);
          setLoading(false);
        })
        .catch(() => {
          setItems([]);
          setLoading(false);
        });
    }
  }, [scheduleId, isOpen]);

  const addItem = () => {
    setItems([...items, { date: '', time: '', note: '' }]);
  };

  const removeItem = (index: number) => {
    if (window.confirm('Удалить эту запись?')) {
      setItems(items.filter((_, i) => i !== index));
    }
  };

  const updateItem = (index: number, field: keyof ScheduleItem, value: string) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  const handleSave = async () => {
    setSaving(true);
    const payload: Schedule = {
      id: scheduleId,
      title: scheduleTitles[scheduleId],
      content: items,
      updatedAt: new Date().toISOString(),
      isPublished: true,
    };

    try {
      await api.schedules.save(scheduleId, payload);
      onSave();
      onClose();
    } catch (error) {
      console.error('Save error:', error);
      alert('Не удалось сохранить изменения');
    } finally {
      setSaving(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Редактирование: ${scheduleTitles[scheduleId]}`}>
      {loading ? (
        <div className={styles.loading}>Загрузка...</div>
      ) : (
        <div className={styles.editor}>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Дата</th>
                  <th>Время</th>
                  <th>Примечание</th>
                  <th style={{ width: 50 }}></th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <Input
                        value={item.date}
                        onChange={(e) => updateItem(index, 'date', e.target.value)}
                        placeholder="ДД.ММ.ГГГГ"
                      />
                    </td>
                    <td>
                      <Input
                        value={item.time}
                        onChange={(e) => updateItem(index, 'time', e.target.value)}
                        placeholder="09:00-13:00"
                      />
                    </td>
                    <td>
                      <Input
                        value={item.note || ''}
                        onChange={(e) => updateItem(index, 'note', e.target.value)}
                        placeholder="Примечание"
                      />
                    </td>
                    <td>
                      <button
                        onClick={() => removeItem(index)}
                        className={styles.removeBtn}
                        title="Удалить запись"
                      >
                        ✕
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button onClick={addItem} className={styles.addBtn}>
            + Добавить запись
          </button>

          <div className={styles.actions}>
            <button className={styles.cancelBtn} onClick={onClose}>
              Отмена
            </button>
            <button
              className={styles.saveBtn}
              onClick={handleSave}
              disabled={saving}
            >
              {saving ? 'Сохранение...' : 'Сохранить'}
            </button>
          </div>
        </div>
      )}
    </Modal>
  );
};
