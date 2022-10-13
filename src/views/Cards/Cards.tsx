import '../../reset.sass';
import { memo, useCallback, useEffect, useState } from 'react';
import UserCard from '../../components/UserCard';
import { User } from '../../models/user';
import { getUsers } from '../../api/user';
import CardList from './CardList';
import styles from './styles.module.sass';

const Cards: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    getUsers().then((response) => setUsers(response.data));
  }, []);
  return (
    <div className={styles.container}>
      <CardList users={users.slice(0, 3)} />
    </div>
  );
};

export default memo(Cards);
