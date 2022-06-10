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
    event.target.setCustomValidity('');
    setTodoText(event.target.value);
  }

  function handleSubmitTodo(event: FormEvent) {
    event.preventDefault();

    onAddTodo(todoText);

    setTodoText('');
  }

  function handleTodoTextInvalid(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório');
  }

  return (
    <form onSubmit={handleSubmitTodo} className={styles.form}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={todoText}
        onChange={handleChangeTodoText}
        name="todo"
        required
        onInvalid={handleTodoTextInvalid}
      />

      <button type="submit">
        Criar <PlusCircle size={20} />
      </button>
    </form>
  );
}
