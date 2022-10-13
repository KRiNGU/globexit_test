import React, {
  KeyboardEventHandler,
  memo,
  useCallback,
  useEffect,
} from 'react';
import { User } from '../../models/user';
import styles from './styles.module.sass';
import { MdOutlineClose } from 'react-icons/md';

export interface ICardModal {
  user: User;
  onClose: () => void;
}

const CardModal = ({ user, onClose }: ICardModal) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Esc' || e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const hadnleClickModal = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  return (
    <div className={styles.backdrop} onClick={hadnleClickModal}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          <MdOutlineClose className={styles.closeIcon} />
        </button>
        <h1>{user?.name}</h1>
        <div className={styles.info}>
          <p className={styles.infoLine}>
            <b className={styles.infoType}>Телефон:</b>
            <span className={styles.infoText}>{user?.phone}</span>
          </p>
          <p className={styles.infoLine}>
            <b className={styles.infoType}>Почта:</b>
            <a
              href="#"
              className={styles.infoText}
              onClick={(e) => e.stopPropagation()}
            >
              {user?.email}
            </a>
          </p>
          <p className={styles.infoLine}>
            <b className={styles.infoType}>Дата приема:</b>
            <span className={styles.infoText}>{user?.hire_date}</span>
          </p>
          <p className={styles.infoLine}>
            <b className={styles.infoType}>Должность:</b>
            <span className={styles.infoText}>{user?.position_name}</span>
          </p>
          <p className={styles.infoLine}>
            <b className={styles.infoType}>Подразделение:</b>
            <span className={styles.infoText}>{user?.department}</span>
          </p>
        </div>
        <p className={styles.addInfo}>
          <b className={styles.infoType}>Дополнительная информация:</b>
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
          odio, sit aspernatur dicta deleniti animi delectus nisi ullam iste
          autem.
        </p>
      </div>
    </div>
  );
};

export default memo(CardModal);
