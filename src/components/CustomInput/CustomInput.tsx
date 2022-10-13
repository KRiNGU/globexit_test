import { memo, useCallback, useState } from 'react';
import styles from './styles.module.sass';
import { BsSearch } from 'react-icons/bs';

export interface ICustomInput {
  onClick: (value: string) => void;
}

const CustomInput = ({ onClick }: ICustomInput) => {
  const [value, setValue] = useState<string>('');
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue(e.target.value);
  }, []);

  const handleSearchClick = useCallback(() => {
    onClick(value);
  }, [value, onClick]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        onClick(value);
      }
    },
    [value, onClick]
  );

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        onChange={handleChange}
        value={value}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearchClick} className={styles.searchButton}>
        <BsSearch
          width="100%"
          height="100%"
          strokeWidth={0.5}
          className={styles.searchIcon}
        />
      </button>
    </div>
  );
};

export default memo(CustomInput);
