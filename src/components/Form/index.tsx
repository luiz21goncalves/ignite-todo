import { PlusCircle } from 'phosphor-react';

import styles from './styles.module.css';

export function Form() {
  return (
    <form className={styles.form}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button type="submit">
        Criar <PlusCircle size={20} />
      </button>
    </form>
  );
}
