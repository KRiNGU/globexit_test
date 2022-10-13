import { memo } from 'react';
import { User } from '../../models/user';
import styles from './UserCard.module.sass';

export interface IUserCard {
  user: User;
}

const UserCard = ({ user }: IUserCard) => {
  return (
    <div className={styles.card}>
      <h4>{user?.name}</h4>
      <p className={styles.userInfo}>{user?.phone}</p>
      <a href="#" className={styles.userInfo}>
        {user?.email}
      </a>
    </div>
  );
};

export default memo(UserCard);
