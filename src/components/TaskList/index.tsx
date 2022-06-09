import styles from './styles.module.css';
import clipboardImage from '../../assets/clipboard.png';

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

      <div className={styles.emptyList}>
        <img
          src={clipboardImage}
          alt="Figura de uma folha com pautas em uma prancheta"
        />

        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </section>
  );
}
