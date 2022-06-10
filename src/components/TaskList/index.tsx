import clipboardImage from '../../assets/clipboard.png';
import { Todo } from '../Todo';
import styles from './styles.module.css';

const todos = [
  {
    id: 1,
    isDone: false,
    text:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
  },
  {
    id: 2,
    isDone: true,
    text:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
  },
];

export function TaskList() {
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

      {todos.length > 0 ? (
        todos.map((todo) => (
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
