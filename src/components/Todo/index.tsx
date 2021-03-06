import { useState } from 'react';

import * as PrimitiveCheckbox from '@radix-ui/react-checkbox';
import { Trash } from 'phosphor-react';

import styles from './styles.module.css';

type TodoProps = {
  isDone?: boolean;
  text: string;
  id: string;
  onToggleComplete: (id: string) => void;
  onRemove: (id: string) => void;
};

export function Todo(props: TodoProps) {
  const { isDone = false, text, onToggleComplete, id, onRemove } = props;

  const [done, setDone] = useState(isDone);

  function handleToggleComplete() {
    onToggleComplete(id);
    setDone((prevState) => !prevState);
  }

  function handleRemoveTodo() {
    onRemove(id);
  }

  return (
    <div className={`${styles.todo} ${done && styles.done}`}>
      <PrimitiveCheckbox.Root
        className={styles.checkbox}
        checked={done}
        onClick={handleToggleComplete}
      >
        <PrimitiveCheckbox.CheckboxIndicator>
          <svg
            width="10"
            height="7"
            viewBox="0 0 10 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.43059 0.342123L4.09865 4.67406L1.61618 2.19159L0.780273 3.0275L4.09865 6.34587L9.26649 1.17803L8.43059 0.342123Z"
              fill="#F2F2F2"
            />
          </svg>
        </PrimitiveCheckbox.CheckboxIndicator>
      </PrimitiveCheckbox.Root>

      <p>{text}</p>

      <button
        type="button"
        className={styles.button}
        onClick={handleRemoveTodo}
      >
        <Trash size={16} weight="bold" />
      </button>
    </div>
  );
}
