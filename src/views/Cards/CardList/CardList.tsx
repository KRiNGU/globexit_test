import { memo } from 'react';
import UserCard from '../../../components/UserCard';
import { User } from '../../../models/user';
import styles from './styles.module.sass';

export interface ICardList {
  users: User[];
  onCardClick: (user: User) => void;
}

const CardList = ({ users, onCardClick }: ICardList) => {
  return (
    <div className={styles.cards}>
      {users.map((user, index) => (
        <UserCard
          user={user}
          key={index}
          onCardClick={() => onCardClick(user)}
        />
      ))}
    </div>
  );
};

export default memo(CardList);
