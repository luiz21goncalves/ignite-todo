import { ChangeEvent, FormEvent, useState } from 'react';

import { PlusCircle } from 'phosphor-react';

import styles from './styles.module.css';

type FormProps = {
  onAddTodo: (text: string) => void;
};

export function Form(props: FormProps) {
  const { onAddTodo } = props;

  const [todoText, setTodoText] = useState('');

  function handleChangeTodoText(event: ChangeEvent<HTMLInputElement>) {
    setTodoText(event.target.value);
  }

  function handleSubmitTodo(event: FormEvent) {
    event.preventDefault();

    onAddTodo(todoText);

    setTodoText('');
  }

  return (
    <form onSubmit={handleSubmitTodo} className={styles.form}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={todoText}
        onChange={handleChangeTodoText}
      />
      <button type="submit">
        Criar <PlusCircle size={20} />
      </button>
    </form>
  );
}
