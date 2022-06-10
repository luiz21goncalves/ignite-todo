import clipboardImage from '../../assets/clipboard.png';
import { Todo as TodoType } from '../../types';
import { Todo } from '../Todo';
import styles from './styles.module.css';

type TodoListProps = {
  todoList: TodoType[];
};

export function TaskList(props: TodoListProps) {
  const { todoList } = props;

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <div className={styles.info}>
          <strong>Tarefas criadas</strong>
          <span>0</span>
        </div>

        <div className={styles.info}>
          <strong>Concluídas</strong>
          <span>0</span>
        </div>
      </header>

      {todoList.length > 0 ? (
        todoList.map((todo) => (
          <Todo key={todo.id} isDone={todo.isDone} text={todo.text} />
        ))
      ) : (
        <div className={styles.emptyList}>
          <img
            src={clipboardImage}
            alt="Figura de uma folha com pautas em uma prancheta"
          />

          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      )}
    </section>
  );
}
