import { memo, useCallback } from 'react';
import { User } from '../../models/user';
import styles from './UserCard.module.sass';
import { BsPhone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

export interface IUserCard {
  user: User;
  onCardClick: () => void;
}

const iconsColor = '#ff9afc';

const UserCard = ({ user, onCardClick }: IUserCard) => {
  const handleClickCard = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      onCardClick();
    },
    [onCardClick]
  );

  return (
    <div className={styles.card} onClick={handleClickCard}>
      <h3>{user?.name}</h3>
      <div className={styles.userInfoBlock}>
        <p className={styles.userInfo}>
          <BsPhone color={iconsColor} strokeWidth={1} />
          <span className={styles.userInfoText}>{user?.phone}</span>
        </p>
        <a
          onClick={(e) => e.stopPropagation()}
          href="#"
          className={`${styles.userInfo} ${styles.userInfoEmail}`}
        >
          <AiOutlineMail color={iconsColor} strokeWidth={2} />
          <span className={styles.userInfoText}>{user?.email}</span>
        </a>
      </div>
    </div>
  );
};

export default memo(UserCard);
