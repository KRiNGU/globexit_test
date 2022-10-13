import '../../reset.sass';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import UserCard from '../../components/UserCard';
import { User } from '../../models/user';
import { getUsers } from '../../api/user';
import CardList from './CardList';
import styles from './styles.module.sass';
import CustomInput from '../../components/CustomInput';
import CardModal from '../../components/CardModal';

const Cards: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState<string>('');
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
  const [modalUser, setModalUser] = useState<User>(users[0]);

  useEffect(() => {
    getUsers(search).then((response) => setUsers(response.data));
  }, [search]);

  const handleClick = useCallback((value: string) => {
    setSearch(value);
  }, []);

  const handleOpenModal = useCallback(
    (user: User) => {
      setModalUser(user);
      setIsModalOpened(true);
    },
    [setIsModalOpened, setModalUser]
  );

  const handleCloseModal = useCallback(() => {
    setIsModalOpened(false);
  }, [setIsModalOpened]);

  return (
    <div className={styles.container}>
      {isModalOpened && (
        <CardModal user={modalUser} onClose={handleCloseModal} />
      )}
      <CustomInput onClick={handleClick} />
      <CardList users={users} onCardClick={handleOpenModal} />
    </div>
  );
};

export default memo(Cards);
