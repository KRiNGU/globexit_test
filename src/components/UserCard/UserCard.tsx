import { memo } from 'react';
import styles from './UserCard.module.sass';

const UserCard = () => {
  return <div className={styles.card}>Hello</div>;
};

export default memo(UserCard);
