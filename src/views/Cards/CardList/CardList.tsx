import { memo } from 'react';
import UserCard from '../../../components/UserCard';
import { User } from '../../../models/user';
import styles from './styles.module.sass';

export interface ICardList {
  users: User[];
}

const CardList = ({ users }: ICardList) => {
  return (
    <div className={styles.cards}>
      {users.map((user, index) => (
        <UserCard user={user} key={index} />
      ))}
    </div>
  );
};

export default memo(CardList);
